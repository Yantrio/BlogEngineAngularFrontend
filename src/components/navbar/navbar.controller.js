/*global angular*/
angular.module('blog')
    .controller('NavbarCtrl', function ($scope) {
        'use strict';
        $scope.date = new Date();
    });
