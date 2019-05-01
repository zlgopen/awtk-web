const fs = require('fs')

function isScriptable(obj) {
  return obj.annotation && obj.annotation.scriptable;
}

function isFake(obj) {
  return obj.annotation && obj.annotation.fake;
}

function isStatic(obj) {
  return obj.annotation && obj.annotation.static;
}

function isReadable(obj) {
  return obj.annotation && obj.annotation.readable;
}

function isWritable(obj) {
  return obj.annotation && obj.annotation.writable;
}

function isPrivate(obj) {
  return obj.annotation && obj.annotation.private;
}

function isCustom(obj) {
  return obj.annotation && obj.annotation.scriptable == 'custom';
}

function isConstructor(obj) {
  return obj.annotation && obj.annotation.constructor === true;
}

function isCast(obj) {
  return obj.annotation && obj.annotation.cast
}

function isEnumString(obj) {
  return obj.annotation && obj.annotation.string === true;
}

function toConstGet(name) {
  return `get_${name}`
}

class CodeGenerator {
  constructor() {
    this.result = '';
    this.symbols = [
      "awtk_web_init",
      "awtk_web_deinit",
      "awtk_web_main_loop_step",
      "awtk_web_on_key_down",
      "awtk_web_on_key_up",
      "awtk_web_on_wheel",
      "awtk_web_on_pointer_down",
      "awtk_web_on_pointer_move",
      "awtk_web_on_im_commit",
      "awtk_web_on_pointer_up"
      ]
  }

  toClassName(name) {
    name = name.replace(/_t$/, '');
    name = name.replace(/(^|_)[a-z]/g, r => {
      if (r.length > 1) {
        r = r.substr(1);
      }

      return r.toUpperCase();
    });

    return name;
  }

  getClassInfo(name) {
    const json = this.json;

    for (let i = 0; i < json.length; i++) {
      let iter = json[i];
      if (iter.type === 'class' && iter.name === name) {
        return iter;
      }
    }

    return null;
  }

  isClassName(name) {
    name = name.replace("*", "").replace("const ", "").replace(" ", "");
    return this.getClassInfo(name) !== null;
  }

  genCallMethod(cls, m) {
    let returnType = null;
    let result = `${m.name}${this.genCallParamList(m)}`;
    if (isCast(m) || isConstructor(m)) {
      returnType = cls.name;
    } else {
      returnType = m.return.type.replace(/\*/g, "");
    }

    let classInfo = this.getClassInfo(returnType);
    if (classInfo) {
      let clsName = this.toClassName(this.getClassName(classInfo));
      result = `   return new ${clsName}(${result});\n`;
    } else {
      return `   return ${result};\n`;
    }

    return result;
  }

  camelCase(name) {
    if (name.indexOf('_') > 0) {
      name = name.replace(/(_)[a-z]/g, r => {
        if (r.length > 1) {
          r = r.substr(1);
        }

        return r.toUpperCase();
      });
    }

    return name;
  }

  toFuncName(clsName, mName) {
    let prefix = clsName.replace(/_t$/, '');
    let name = mName.replace(prefix + '_', '');

    return this.camelCase(name);
  }

  genParamListOrg(m) {
    let result = '';
    m.params.forEach((iter, index) => {
      if (index === 0) {
        result += iter.name;
      } else {
        if (result) {
          result += ', ';
        }
        result += iter.name;
      }
    });

    return '(' + result + ')';
  }

  genParamList(m) {
    let result = '';
    let isNormalMethod = !isCast(m) && !isStatic(m) && !isConstructor(m);

    m.params.forEach((iter, index) => {
      if (index == 0) {
        if (isNormalMethod) {
          return;
        }
      }

      if (result !== '') {
        result += ', ';
      }
      result += iter.name;
    });

    return '(' + result + ')';
  }

  genCallParamList(m) {
    let result = '';
    let isNormalMethod = !isCast(m) && !isStatic(m) && !isConstructor(m);

    m.params.forEach((iter, index) => {
      const name = iter.name;

      if (index == 0) {
        if (isNormalMethod) {
          result += 'this.nativeObj';
          return;
        } else if (isCast(m)) {
          result += `${name} ? (${name}.nativeObj || ${name}) : null`;
          return;
        }
      }

      if (result !== '') {
        result += ', ';
      }

      if (this.isClassName(iter.type)) {
        result += `${name} ? ${name}.nativeObj : null`;
      } else {
        result += name;
      }
    });

    return '(' + result + ')';
  }

  genFuncImpl(cls, m) {
    let result = '';
    const name = this.toFuncName(cls.name, m.alias || m.name);

    if (isConstructor(m) || isCast(m) || isStatic(m)) {
      result += ' static'
    }

    result += ` ${name}${this.genParamList(m)} {\n`;
    result += this.genCallMethod(cls, m);
    result += ' }\n\n'

    return result;
  }

  getClassName(cls) {
    return cls.alias || cls.name;
  }

  getParentClassName(cls) {
    return this.getClassName(this.getClassInfo(cls.parent));
  }

  genOneClass(cls) {
    let result = '';
    let clsName = this.toClassName(this.getClassName(cls));

    result = `class ${clsName}`;
    if (cls.parent) {
      result += ` extends ${this.toClassName(this.getParentClassName(cls))} {\n`
    } else {
      result += ' {\n';
    }

    result += ' public nativeObj;\n';
    result += ' constructor(nativeObj) {\n';
    if (cls.parent) {
      result += '   super(nativeObj);\n';
    } else {
      result += '   this.nativeObj = nativeObj;\n';
    }
    result += ' }\n\n';

    if (cls.methods) {
      cls.methods.forEach(iter => {
        result += this.genFuncImpl(cls, iter);
      });
    }

    if (cls.properties) {
      cls.properties.forEach((p) => {
        if (isWritable(p)) {
          result += this.genSetProperty(cls, p);
        }

        if (isReadable(p)) {
          result += this.genGetProperty(cls, p);
        }
      });
    }

    if (cls.consts) {
      cls.consts.forEach(iter => {
        const name = iter.name;
        const shortName = name.replace(cls.prefix, "");
        result += ` public static ${shortName} = ${toConstGet(name)}();\n`
      });
    }

    result += '}\n\n';
    return result;
  }


  getSetPropertyFuncName(cls, p) {
    return `${cls.name}_set_prop_${p.name}`;
  }

  getGetPropertyFuncName(cls, p) {
    return `${cls.name}_get_prop_${p.name}`;
  }

  genSetProperty(cls, p) {
    let result = '';
    const name = this.toFuncName(cls.name, p.name);
    const funcName = this.getSetPropertyFuncName(cls, p);

    result += ` set ${name}(value) {\n`;
    result += `   ${funcName}(this.nativeObj, value);\n`;
    result += ' }\n\n'

    return result;
  }

  genGetProperty(cls, p) {
    let result = '';
    const type = p.type;
    const name = this.toFuncName(cls.name, p.name);
    const funcName = this.getGetPropertyFuncName(cls, p);

    result += ` get ${name}() {\n`;
    result += `   return ${funcName}(this.nativeObj);\n`;
    result += ' }\n\n'

    return result;
  }

  genOneEnum(cls) {
    let clsName = this.toClassName(cls.name);
    let result = `enum ${clsName} {\n`;

    if (cls.consts) {
      cls.consts.forEach(iter => {
        const name = iter.name;
        const shortName = name.replace(cls.prefix, "");
        result += ` ${shortName} = ${toConstGet(name)}(),\n`
      });
    }

    result += `};\n\n`;

    return result;
  }

  genOne(cls) {
    if (cls.type === 'class') {
      return this.genOneClass(cls);
    } else if (cls.type === 'enum') {
      return this.genOneEnum(cls);
    } else {
      return '';
    }
  }

  filterScriptableJson(ojson) {
    let json = ojson.filter(isScriptable);

    json.forEach(iter => {
      if (iter.methods && iter.methods.length) {
        iter.methods = iter.methods.filter(isScriptable);
      }

      if (iter.properties && iter.properties.length) {
        iter.properties = iter.properties.filter(isScriptable);
      }
    })

    fs.writeFileSync('filter.json', JSON.stringify(json, null, '  '));

    return json;
  }

  genFuncsDecl(json) {
    let result = '';

    json.forEach(cls => {
      if (cls.methods) {
        cls.methods.forEach(m => {
          result += `declare function ${m.name}${this.genParamListOrg(m)};\n`
          this.symbols.push(m.name);
        });
      }

      if (cls.properties) {
        cls.properties.forEach(p => {
          if (isReadable(p)) {
            const funcName = this.getGetPropertyFuncName(cls, p);
            result += `declare function ${funcName}(nativeObj);\n`;
            this.symbols.push(funcName);
          }

          if (isWritable(p)) {
            const funcName = this.getSetPropertyFuncName(cls, p);
            result += `declare function ${funcName}(nativeObj, value);\n`;
            this.symbols.push(funcName);
          }
        });
      }

      if (cls.consts) {
        cls.consts.forEach(c => {
          const name = c.name;
          result += `declare function ${toConstGet(name)}();\n`
            this.symbols.push(toConstGet(name));
        });
      }
    });

    return result;
  }

  genJsonAll(ojson) {
    let result = '';
    let json = this.filterScriptableJson(ojson);
    this.json = json;

    result += this.genFuncsDecl(json);
    result += '\n';

    result += 'namespace AWTK {\n';
    json.forEach(iter => {
      result += this.genOne(iter);
    });
    result += '}\n';

    this.result = result;
  }

  genAll(filename) {
    this.genJsonAll(JSON.parse(fs.readFileSync(filename).toString()));
  }

  saveResult(filename) {
    fs.writeFileSync(filename, this.result);
    console.log(`output to ${filename}`);
  }
  
  saveSymbols(filename) {
    let symbols = this.symbols.map(iter => {
      return '_' + iter;
    });

    fs.writeFileSync(filename, JSON.stringify(symbols, null, '\t'));
    console.log(`output symbols to ${filename}`);
  }

  static gen() {
    const gen = new CodeGenerator();
    const input = '../../../awtk/tools/idl_gen/idl.json';
    const output = '../../gen/ts/awtk_api.ts';
    const symbols_output = '../../configs/export_awtk_funcs.json';

    gen.genAll(input);
    gen.saveResult(output);
    gen.saveSymbols(symbols_output);
  }
}

CodeGenerator.gen();
