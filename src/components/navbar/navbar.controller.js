'use strict';

angular.module('blog')
  .controller('NavbarCtrl', function ($scope) {
    $scope.date = new Date();
  });
