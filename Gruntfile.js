module.exports = function(grunt) {
    require('time-grunt')(grunt);
    require('jit-grunt')(grunt);

    grunt.initConfig({
        // ** DEFINE OUR TASKS ** //
        jshint: {
            files: {
                options: {
                    jshintrc: '.jshintrc'
                },
                src: ['src/**/*.js']
            }
        }
    });

    // ** GROUP THE TASKS AS COMMANDS ** //
    grunt.registerTask('build', ['jshint']);
};
