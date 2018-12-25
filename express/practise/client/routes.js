app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    // $urlRouterProvider.otherwise("/profile");

    $stateProvider
        .state('profile', {
            url: "/profiles",
            controller: 'proCtrl',
            templateUrl: "modules/profile/index.html"
        })
        .state('profileAdd', {
            url: "/profile/add",
            controller: 'proAddCtrl',
            templateUrl: "modules/profile-add/index.html"
        })
        .state('profileView', {
            url: "/profile/:id",
            controller: 'proViewCtrl',
            templateUrl: "modules/profile-view/index.html"
        })
}]);