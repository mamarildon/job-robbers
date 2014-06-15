app.controller('StudentController', function ($scope, $rootScope, Students) {
  $scope.tasks = [];

  $rootScope.$on('change:tasks', function (event, tasks) {
    $scope.$apply(function () {
        $scope.tasks = tasks;
    }); // the action needs to wrapped in a callback... Angular performs whatever work is inside the callback, then updates all views
    // http://jimhoskins.com/2012/12/17/angularjs-and-apply.html
    console.log($scope.tasks);

    // $scope.Applied          = tasks['Applied:'];
    // $scope.Graveyard        = tasks['Graveyard:'];
    // $scope.Leads            = tasks['Leads:'];
    // $scope.Offers           = tasks['Offers:'];
    // $scope.OnSiteScheduled  = tasks['On-Site Scheduled:'];
    // $scope.PostOnSite       = tasks['Post On-Site:'];
    // $scope.PostScreenConvo  = tasks['Post Screen Conversation:'];
    // $scope.PostTech         = tasks['Post Tech Screen (Phone/take home):'];
    // $scope.PreOnSite        = tasks['Pre-Onsite Tech Scren (phone/take home) Scheduled:'];
    // $scope.ScreenConvo      = tasks['Screen Conversation Scheduled:'];
  });

  $scope.logout = function () {
    Students.logout();
  };

});
