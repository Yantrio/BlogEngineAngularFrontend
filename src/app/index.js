/*global angular*/

angular
    .module('blog', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ui.bootstrap', 'angularMoment'])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        'use strict';
        //everything else goes here
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/main/main.html',
                controller: 'MainCtrl'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'app/about/about.html'
            })
            .state('post', {
                url: '/Posts/:postname',
                controller: 'blogPostCtrl',
                templateUrl: 'components/blogposts/blogpost.html',
                resolve: {
                    blogPostModel: function ($resource, $stateParams) {
                        var blogPosts = $resource('http://localhost:1949/Posts/' + $stateParams.postname,
                            null, {
                                'post': {
                                    method: 'POST',
                                    isArray: false
                                }
                            });
                        return blogPosts.post(null, null).$promise;
                    }
                }
            });
    }]);