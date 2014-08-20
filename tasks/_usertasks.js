'use strict';

module.exports = function(grunt)
{
	var _ = require('lodash');

	grunt.registerTask('_usertasks', function(){
		var allTasks = {},
			userTasks = _.filter(grunt.task._tasks, function(task){
				// Grab only the local user tasks
				return !task.multi && !/local Npm module/.test(task.meta.info);
			});
			
		// Format the tasks into an dictionary
		_.each(userTasks, function(task){
			allTasks[task.name] = task.info;
		});

		// Output the list
		grunt.log.write(JSON.stringify(allTasks));
	});
};