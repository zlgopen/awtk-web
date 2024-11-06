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

function isGcConstructor(obj) {
  return obj.annotation && (obj.annotation.constructor === true && obj.annotation.gc);
}

function isGcDeconstructor(obj) {
  return obj.annotation && (obj.annotation.deconstructor === true && obj.annotation.gc);
}

function isCast(obj) {
  return obj.annotation && obj.annotation.cast
}

function isEnumString(obj) {
  return obj.annotation && obj.annotation.string === true;
}

class CodeGenerator {
  constructor() {
    this.result = '';
  }

  genOneClass(cls) {
    let result = '';
    let isConstString = isEnumString(cls);

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
        result += isConstString ? `const char* ` : 'int32_t ';
        result += `get_${name} (void) {\n`;
        result += `  return ${name};\n`;
        result += '}\n\n'
      });
    }

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
    const type = p.type;
    const name = p.name;
    const funcName = this.getSetPropertyFuncName(cls, p);

    result += `ret_t ${funcName} (${cls.name}* obj, ${type} value) {\n` 
    result += `  obj->${name} = value;\n`;
    result += '  return RET_OK;\n'
    result += '}\n\n'

    return result;
  }

  genGetProperty(cls, p) {
    let result = '';
    const type = p.type;
    const name = p.name;
    const funcName = this.getGetPropertyFuncName(cls, p);

    result += `${type} ${funcName} (${cls.name}* obj) {\n` 
    result += `  return obj->${name};\n`;
    result += '}\n\n'

    return result;
  }

  genOne(cls) {
    if (cls.type == 'class' || cls.type == 'enum') {
      return this.genOneClass(cls);
    }

    return '';
  }

  genIncludes(json) {
    let result = '/*XXX: GENERATED CODE, DONT EDIT IT.*/\n';

    result += '#include "tkc/utf8.h"\n';
    result += '#include "tkc/mem.h"\n';

    json.forEach(iter => {
      if (result.indexOf(iter.header) <= 0) {
        result += `#include "${iter.header}"\n`;
      }
    });

    return result;
  }

  genJsonAll(ojson) {
    let json = ojson;
    let result = this.genIncludes(json);

    json.forEach(iter => {
      result += this.genOne(iter);
    });

    this.result = result;
  }

  genAll(filename) {
    this.genJsonAll(JSON.parse(fs.readFileSync(filename).toString()));
  }

  saveResult(filename) {
    fs.writeFileSync(filename, this.result);
  }

  static gen() {
    const gen = new CodeGenerator();
    const input = '../../../../awtk-binding/tools/code_gen/js/filter.json';
    const output = '../../gen/c/awtk_wrap.c';

    gen.genAll(input);
    gen.saveResult(output);
    console.log(`output to ${output}`);
  }
}

CodeGenerator.gen();

