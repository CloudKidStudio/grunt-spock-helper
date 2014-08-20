'use strict';

module.exports = function(grunt)
{
	grunt.registerTask('_usertasks', function(){
		var _ = grunt.util._,
			allTasks = {},
			// Grab only the local user tasks
			userTasks = _.filter(grunt.task._tasks, function(task){
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