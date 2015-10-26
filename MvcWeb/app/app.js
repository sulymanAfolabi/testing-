'use strict';


var chat = angular.module("chat", ["ngResource", "ngRoute"]).
    config(function ($routeProvider) {
        $routeProvider.
            when('/home', { controller: ListCtrl, templateUrl: 'app/view/table.html' }).
             when('/view1', { controller: ListCtrl, templateUrl: 'app/view/chart.html' }).
             when('/contact', { controller: ListCtrl, templateUrl: 'app/view/contact.html' }).
                when('/project', { controller: ListCtrl, templateUrl: 'app/view/project.html' }).
                when('/about', { controller: ListCtrl, templateUrl: 'app/view/about.html' }).
             when('/chart', { controller: ListCtrl, templateUrl: 'app/view/gallery.html' }).
            when('/edit/:editId', { controller: EditCtrl, templateUrl: 'app/view/formAdd.html' }).
            when('/formAdd', { controller: Create, templateUrl: 'app/view/formAdd.html' }).
            otherwise({ redirectTo: '/' });

       

    });

var Create = function ($scope, $location, Todo) {
    $scope.do = "Add";

    $scope.save = function () {

        Todo.save($scope.item, function () {
           
            $location.path('/home');
        });
    };
};

var EditCtrl = function ($scope, $routeParams, $location, Todo) {
    var id = $routeParams.editId;
    $scope.do = "Edit";
    $scope.save = function () {
        Todo.update({ id: id }, $scope.item, function () {
            $location.path('/home');
        });
    };
    $scope.item = Todo.get({ id: id });
};


var ListCtrl = function ($scope, $location) {
    $scope.test = "testing";
};

chat.factory('Todo', function ($resource) {
    return $resource('api/Employee/:Id', { Id: '@Id' }, { update: { method: 'PUT' } });
});

var ListCtrl = function ($scope, $location, Todo) {

    $scope.delete = function () {
        var id = this.item.Id;
        Todo.delete({ Id: id }, function () {
            $('#item_' + id).fadeOut();
        });
    };
    $scope.reset = function () {


    $scope.items = Todo.query({q: $scope.query});
    };
    $scope.reset();
   // $scope.delete();
};