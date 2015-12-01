var dart = angular.module('dartnews', [
  'dartnews.services',
  'dartnews.feed',
  'ngRoute'
])
.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/landingPage', {
      templateUrl: '/app/landingPage/landingPage.html'
    })
    .when('/feed', {
      templateUrl: '/app/feed/feed.html',
      controller: 'FeedController'
    })
    .otherwise({
      redirectTo: '/landingPage'
    });
}]);
