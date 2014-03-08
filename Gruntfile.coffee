module.exports = (grunt) =>
	grunt.loadNpmTasks 'grunt-typescript'
	grunt.loadNpmTasks 'grunt-contrib-copy'
	grunt.loadNpmTasks 'grunt-contrib-watch'
	grunt.loadNpmTasks 'grunt-contrib-clean'
	grunt.loadNpmTasks 'grunt-contrib-concat'

	src =
		typescript: 'src/main/typescript/**/*.ts'
		typescript_temp: 'target/typescript/'
		site: 'target/_site'
		javascript: 'src/main/javascript'
		html: 'src/main/html'

	src.scriptDest = "#{src.site}/script"

	grunt.initConfig
		clean: ["target"]
		copy:
			html:
				expand: true
				cwd: src.html
				src: '**'
				dest: src.site
			javascript:
				expand: true
				cwd: src.javascript
				src: '**'
				dest: src.scriptDest
		typescript:
			base:
				src: [src.typescript]
				dest: src.typescript_temp
				options:
					target: 'es5'
		concat:
			dist:
				src: "#{src.typescript_temp}/**/*.js"
				dest: "#{src.scriptDest}/main.js"
		watch:
			ts:
				files: [src.typescript]
				tasks: ['typescript:base', 'concat:dist']
			html:
				files: ["#{src.html}/**"]
				tasks: ['copy:html']

	grunt.registerTask("default", ['clean', 'copy:html', 'copy:javascript', 'typescript:base', 'concat:dist', "watch"]);