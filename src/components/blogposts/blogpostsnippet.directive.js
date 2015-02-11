/*global angular*/
angular.module('blog')
    .directive('blogPostSnippet', function () {
        'use strict';
        return {
            restrict: 'E',
            templateUrl: 'components/blogposts/blogpostsnippet.html'
        };
    });