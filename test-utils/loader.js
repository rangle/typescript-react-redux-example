'use strict';

const babel = require('babel-core');
const sourceMapSupport = require('source-map-support');

const outputs = {}; // filename => { code, map }

const babelOpts = {
  presets: [
    require('babel-preset-es2015'),
  ],
  inputSourceMap: true,
  ast: false,
};

let typescriptLoader = null;

function registerBabel() {
  typescriptLoader = require.extensions['.ts'];

  Object.defineProperty(require.extensions, '.tsx', {
    enumerable: true,

    set: function set(newTSLoader) {
      typescriptLoader = newTSLoader;
    },
    get: function get() {
      return loadPipeline;
    },
  });

  sourceMapSupport.install({
    handleUncaughtExceptions: false,

    retrieveFile: function retrieveFile(filename) {
      return outputs
          && outputs[filename]
          && outputs[filename].code;
    },

    retrieveSourceMap: function retrieveSourceMap(filename) {
      const map = outputs && outputs[filename] && outputs[filename].map;
      if (!map) {
        return null;
      }

      return {
        url: null,
        map: map,
      };
    },

    overrideRetrieveFile: true,
    overrideRetrieveSourceMap: true,
  });
}

function register(opts) {
  registerBabel();

  require('ts-node').register(opts);
}

function loadPipeline(m, filename) {
  m._compile(compile(filename), filename);
}

function compile(filename) {
  const typescriptCode = mockLoad(typescriptLoader, filename);

  const generated = babel.transform(typescriptCode, babelOpts);

  outputs[filename] = { code: generated.code, map: generated.map };

  return generated.code;
}

function mockLoad(loader, filename) {
  let content;

  const module = {
    _compile: function _compile(_content) {
      content = _content;
    },
  };

  loader(module, filename);

  return content;
}

register();
