'use strict';

process.env.TEST = true;

const loaders = require('./webpack/loaders');
const postcssInit = require('./webpack/postcss');
const plugins = require('./webpack/plugins');
const webpack = require('./webpack.config');

module.exports = (config) => {
  const coverage = config.singleRun ? ['coverage'] : [];

  config.set({
    frameworks: [
      'jasmine',
    ],

    plugins: [
      'karma-jasmine',
      'karma-sourcemap-writer',
      'karma-sourcemap-loader',
      'karma-webpack',
      'karma-coverage',
      'karma-remap-istanbul',
      'karma-spec-reporter',
      'karma-chrome-launcher',
    ],

    files: [
      './src/tests.entry.ts',
      {
        pattern: '**/*.map',
        served: true,
        included: false,
        watched: true,
      },
    ],

    preprocessors: {
      './src/tests.entry.ts': [
        'webpack',
        'sourcemap',
      ],
      './src/**/!(*.test).(ts|js)': [
        'sourcemap',
      ],
    },

    webpack: Object.assign({}, webpack, {
      entry: './src/tests.entry.ts',
      output: null,
      devtool: 'inline-source-map',
      verbose: false,
      module: {
        loaders: combinedLoaders(),
        postLoaders: config.singleRun
          ? [ loaders.istanbulInstrumenter ]
          : [ ],
      },
      stats: {
        colors: true,
        reasons: true,
      },
      debug: config.singleRun ? false : true,
      plugins,
      postcss: postcssInit,
    }),

    webpackServer: {
      noInfo: true, // prevent console spamming when running in Karma!
    },

    reporters: ['spec']
      .concat(coverage)
      .concat(coverage.length > 0 ? ['karma-remap-istanbul'] : []),

    remapIstanbulReporter: {
      src: 'coverage/chrome/coverage-final.json',
      reports: {
        html: 'coverage',
      },
      timeoutNotCreated: 2000,
      timeoutNoMoreFiles: 2000,
    },

    // only output json report to be remapped by remap-istanbul
    coverageReporter: {
      reporters: [
        { type: 'json' },
      ],
      dir: './coverage/',
      subdir: (browser) => {
        return browser.toLowerCase().split(/[ /-]/)[0]; // returns 'chrome'
      },
    },

    port: 9999,
    colors: true,
    logLevel: config.singleRun ? config.LOG_INFO : config.LOG_DEBUG,
    autoWatch: true,
    browsers: ['Chrome'], // Alternatively: 'PhantomJS'
    captureTimeout: 6000,
  });
};

function combinedLoaders() {
  return Object.keys(loaders).reduce(function reduce(aggregate, k) {
    switch (k) {
    case 'istanbulInstrumenter':
    case 'tslint':
      return aggregate;
    case 'tsx':
      return aggregate.concat([ // force inline source maps
        Object.assign(loaders[k],
          { query: { babelOptions: { sourceMaps: 'both' } } })]);
    default:
      return aggregate.concat([loaders[k]]);
    }
  },
  []);
}
