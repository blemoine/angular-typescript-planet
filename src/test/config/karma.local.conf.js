module.exports = function (config) {
    config.set({

        basePath: './../../../',
        files: [
            'target/_site/script/angular.js',
            'target/_site/script/main.js',
            'src/test/typescript/**/*.ts'
        ],
        browsers: [ 'PhantomJS'],
        reporters: ['progress'],
        frameworks: ['jasmine'],
        autoWatch: true,
        singleRun: false,
        plugins: [
            'karma-jasmine',
            'karma-typescript-preprocessor',
            'karma-phantomjs-launcher'
        ],
        typescriptPreprocessor: {
            options: {
                target: 'ES5'
            },
            transformPath: function (path) {
                return path.replace(/\.ts$/, '.js');
            }
        },
        preprocessors: {
            'src/test/typescript/**/*.ts': ['typescript']
        }
    });
};