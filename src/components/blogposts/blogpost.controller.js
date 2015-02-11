/*global angular*/
angular.module('blog')
    .controller('blogPostCtrl', ['$scope', 'blogPostModel', function ($scope, blogPostModel) {
        'use strict';
        $scope.post = blogPostModel;
    }]);
