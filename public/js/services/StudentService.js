app.factory('Students', function ($http, $rootScope, $location) {

  var updateTasks = function (tasks) {
    $rootScope.$emit('change:tasks', tasks);
  };


  var parseData = function (tasks) {
    var results       = [];
    var currentHeader = '';
    tasks.forEach(function(task) {
      if (task.name.indexOf(':') !== -1) {
        currentHeader = task.name;
        results[task.name] = {
          id       : task.id,
          subTasks : []
        };
      } else {
        if (!!task.name.length) { results[currentHeader]['subTasks'].push(task); }
      }
    });
    updateTasks(results);
  };

  var Students = {};

  Students.fetchTasks = function () {
    return $http.get('/users')
      .then(function (d) {
        parseData(d.data);
      })
  };

  Students.logout = function () {
    return $http.get('/unlink/asana')
      .then(function () {
        $location.path('/')
      });
  };

  Students.changeParent = function () {
    return $http.get('/test')
      .then(function (d) {
        console.log('parent change', d.data);
      })
  };

  Students.fetchTasks();
  Students.changeParent();

});