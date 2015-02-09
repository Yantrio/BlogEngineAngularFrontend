'use strict'

angular.module('blog')
  .controller('MainCtrl', function ($scope, $resource) {
    var blogPosts = $resource('http://localhost:1949/Posts/0/10',
                              null,
                              {'post':{method:'POST', isArray:true}}
                             );

    var posts = blogPosts.post(null, function () {
        $scope.posts = posts;
    });
    
    angular.forEach($scope.awesomeThings, function(awesomeThing) {
      awesomeThing.rank = Math.random();
    });
  });