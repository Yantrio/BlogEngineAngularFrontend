/*global angular*/

angular.module('blog')
    .controller('MainCtrl', function ($scope, $resource) {
        "use strict";
        var blogPosts = $resource('http://localhost:1949/Posts/0/10',
                null, {
                    'post': {
                        method: 'POST',
                        isArray: true
                    }
                }),
            posts = blogPosts.post(null, function () {
                $scope.posts = posts;
            });
    });