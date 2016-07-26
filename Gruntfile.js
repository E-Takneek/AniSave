module.exports=function(grunt){

	grunt.initConfig({
	  concat: {
	    dist: {
	      src: ['main/js/file1.js', 'main/js/file2.js'],
	      dest: 'build/build.js',
	    },
	  },
	  watch: {
	    js: {
	      files: ['main/js/*.js'],
	      tasks: ['concat'],
	    },
  	},
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
};