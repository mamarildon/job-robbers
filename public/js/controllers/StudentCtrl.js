app.controller('StudentController', function ($scope, $rootScope, Students) {
  $scope.tasks = [];

  $rootScope.$on('change:tasks', function (event, tasks) {
    $scope.tasks = tasks;
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
