var app = angular.module('myApp', ['ui.router'])
    .controller('mainCtrl', function ($scope, $http, $state) {
        // $scope.oneuserData = UserService.getUserData();

        $scope.myDate = Date.now();

        $scope.getPro = function () {
            $http.get("http://localhost:4000/profile")
                .then(function (result) {
                    $scope.dashboard_2 = result.data.reply;
                });
        }

        $scope.postPro = function() {
            let data = {
                fn: 'sai',
                ln: 'teja'
            }
            $http.post("http://localhost:4000/profile", data)
            .then(function (result) {
                $scope.dashboard_2 = result;
            });
        }

        // $http.get("http://www.mocky.io/v2/5b4daf3431000055005ebd18")
        //     .then(function (result) {
        //         $scope.activities = result.data.reply;
        //     });

        $scope.timestamp = new Date(1531785637143).toDateString();
        $scope.IsVisible = true;

        $scope.ShowHide = function (val) {
            $scope.nameval = "Shared with me"
            $scope.IsVisible = $scope.IsVisible = false;
            $scope.val = val;
        }

        $scope.bench1 = function () {
            $scope.IsVisible = $scope.IsVisible = true;
        }

        $scope.mybench = function () {
            $state.go('profile');
        }
    })
