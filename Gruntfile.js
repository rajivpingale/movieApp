module.exports = function(grunt) {
    // Load Grunt tasks declared in the package.json file
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    connect: {
      all: {
        options:{
          port: 9000,
          hostname: "localhost",
        }
      }
    },
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    uglify: {
        src: {
            files: {
                'app/script/scripts.min.js': [
                    'app/bower_components/angular/angular.js',
                    'app/bower_components/angular-route/angular-route.js',
                    'app/app.js',
                    'app/controllers/*.js',
                    'app/directives/*.js',
                    'app/services/*.js'
                ]
            }
        }
    },
    karma: {  
        unit: {
            options: {
                frameworks: ['jasmine'],
                singleRun: true,
                browsers: ['PhantomJS'],
                files: [
                    'app/bower_components/angular/angular.js',
                    'app/bower_components/angular-route/angular-route.js',
                    'app/bower_components/angular-mocks/angular-mocks.js',
                    'app/app.js',
                    'app/controllers/*.js',
                    'app/directives/*.js',
                    'app/services/*.js',
                    'spec/*.spec.js',
                    'app/views/**/*.html',
                ],
                browserNoActivityTimeout: 60000,
                jasmineNodeOpts: {
                    defaultTimeoutInterval: 30000
                },
                preprocessors: {
                    'app/views/**/*.html': ['ng-html2js']  // to catch the filename as specified in templateUrl 
                },
                ngHtml2JsPreprocessor: {
                    moduleName: 'templates',
                    stripPrefix : "app/"
                }
            }
        }
    },
    watch: {
      files: ['app/**/*js',['app/*.js']],
      tasks: ['uglify']
    }
  });

    //Default task that runs server and Watch
    grunt.registerTask('default', [
        'jshint',
        'uglify',
        'connect',
        'watch'
    ]); 

    //Run Karma Test Cases

    grunt.registerTask('test', [
        'uglify',
        'karma'
    ]);

};