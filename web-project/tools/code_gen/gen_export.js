const fs = require('fs')

function isScriptable(obj) {
  return obj.annotation && obj.annotation.scriptable;
}

function isReadable(obj) {
  return obj.annotation && obj.annotation.readable;
}

function isWritable(obj) {
  return obj.annotation && obj.annotation.writable;
}

function toConstGet(name) {
  return `get_${name}`
}

class CodeGenerator {
  constructor() {
    this.symbols = [
      "awtk_web_init",
      "awtk_web_deinit",
      "awtk_web_main_loop_step",
      "awtk_web_request_repaint",
      "awtk_web_on_key_down",
      "awtk_web_on_key_up",
      "awtk_web_on_wheel",
      "awtk_web_on_pointer_down",
      "awtk_web_on_pointer_move",
      "awtk_web_on_im_commit",
      "awtk_web_on_pointer_up"
      ]
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

  getSetPropertyFuncName(cls, p) {
    return `${cls.name}_set_prop_${p.name}`;
  }

  getGetPropertyFuncName(cls, p) {
    return `${cls.name}_get_prop_${p.name}`;
  }

  genFuncsDecl(json) {
    json.forEach(cls => {
      if (cls.methods) {
        cls.methods.forEach(m => {
          this.symbols.push(m.name);
        });
      }

      if (cls.properties) {
        cls.properties.forEach(p => {
          if (isReadable(p)) {
            const funcName = this.getGetPropertyFuncName(cls, p);
            this.symbols.push(funcName);
          }

          if (isWritable(p)) {
            const funcName = this.getSetPropertyFuncName(cls, p);
            this.symbols.push(funcName);
          }
        });
      }

      if (cls.consts) {
        cls.consts.forEach(c => {
          const name = c.name;
          this.symbols.push(toConstGet(name));
        });
      }
    });
  }

  genJsonAll(ojson) {
    this.genFuncsDecl(ojson);
  }

  genAll(filename) {
    this.genJsonAll(JSON.parse(fs.readFileSync(filename).toString()));
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
    const input = '../../../../awtk-binding/tools/code_gen/js/filter.json';
    const output = '../../configs/export_awtk_funcs.json';

    gen.genAll(input);
    gen.saveSymbols(output);
  }
}

CodeGenerator.gen();
