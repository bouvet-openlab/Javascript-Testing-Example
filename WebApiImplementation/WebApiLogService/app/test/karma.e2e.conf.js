// Karma configuration
// Generated on Thu Sep 18 2014 21:18:27 GMT+0200 (W. Europe Daylight Time)

module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '../',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            'lib/jquery-2.1.1.min.js',
            'lib/bootstrap.min.js',
            'lib/angular.min.js',
            'lib/angular-route.min.js',
            'lib/angular-resource.min.js',
            'lib/angular-mocks.js',
            'lib/sinon-1.10.3.js',
            'src/**/*.js',
            'src/directives/*.html',
            'test/unit/**/*.js'
        ],


        ngHtml2JsPreprocessor: {
            prependPrefix: 'app/'
        },


        //plugins: [
        //    'karma-ng-html2js-preprocessor'
        //],


        // list of files to exclude
        exclude: [
        ],

        preprocessors: {
            // source files, that you wanna generate coverage for
            // do not include tests or libraries
            // (these files will be instrumented by Istanbul)
            'src/**/*.js': ['coverage'],
            '**/*.html': ['ng-html2js']
        },

        coverageReporter: {
            reporters: [
                {
                    type: 'html',
                    dir: 'test/coverage/',
                    subdir: function(browser) {
                        // normalization process to keep a consistent browser name accross different
                        // OS
                        return browser.toLowerCase().split(/[ /-]/)[0];
                    }
                },
                {
                    type: 'html',
                    dir: 'test/coverage/',
                    subdir: '.'
                }
                //{ type: 'teamcity' }
            ],
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'coverage'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false
    });
};