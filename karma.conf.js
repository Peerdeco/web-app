var path = require('path');

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', 'chai', 'mocha'],
    files: [
      'test/**/*.js'
    ],

    preprocessors: {
      // add webpack as preprocessor
      'src/**/*.js': ['webpack', 'sourcemap'],
      'test/**/*.js': ['webpack', 'sourcemap']
    },

    webpack: { //kind of a copy of your webpack config
      devtool: 'inline-source-map', //just do inline source maps instead of the default
      module: {
        loaders: [
          {
            test: /\.js$/,
            loader: 'babel',
            exclude: path.resolve(__dirname, 'node_modules'),
            query: {
              presets: ['airbnb']
            }
          },
          {
            test: /\.jsx?$/,
            loaders: ['babel?cacheDirectory'], // enable caching for improved performance
            exclude: path.resolve(__dirname, 'node_modules')
          },
          {
            test: /\.json$/,
            loader: 'json-loader',
            exclude: path.resolve(__dirname, 'node_modules')
          },
        ]
      },
      externals: {
        jsdom: 'window',
        cheerio: 'window',
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': 'window'
      }
    },

    webpackServer: {
      noInfo: true //please don't spam the console when running in karma!
    },

    plugins: [
      'karma-chai',
      'karma-chai-plugins',
      'karma-mocha',
      'karma-spec-reporter',
      'karma-webpack',
      'karma-jasmine',
      'karma-sourcemap-loader',
      'karma-chrome-launcher',
      'karma-phantomjs-launcher'
    ],


    babelPreprocessor: {
      options: {
        presets: ['airbnb']
      }
    },
    reporters: ['spec'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
  })
};