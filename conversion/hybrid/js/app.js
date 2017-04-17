module.exports = angular.module('interestApp', ['ui.router'])
.service('PinsService', function($http, $q) {
  this._pins = null;

  this.pins = function() {
    var self = this;
    if(self._pins == null) { 
      // initialize with sample data
      return $http.get("/js/data/sample-data.json").then(
        function(response) {
          self._pins = response.data;
          return self._pins;
        });
    } else {
      return $q.when(self._pins);
    }
  }

  this.addPin = function(newPin) {
    console.log('addPin', newPin);
    // adding would normally be an API request so lets mock async
    return $q.when(
      this._pins.unshift(newPin)
    );
  }
})
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      templateUrl: '/templates/home.html',
      controller: 'HomeController as ctrl',
      url: '/',
      resolve: {
        'pins': function(PinsService) {
          return PinsService.pins();
        }
      }
    })
    .state('add', {
      template: "<add-pin></add-pin>",
      url: '/add',
      resolve: {
        'pins': function(PinsService) {
          return PinsService.pins();
        }
      }
    })
 
    $urlRouterProvider.when('', '/') ;
})
.filter('truncate', function() {
  return function(input, amt) {
    if(input.length > amt) {
      return input.substring(0, amt);
    } else {
      return input;
    }
  }
})
.controller('HomeController', function(pins, AnalyticsService) {
  AnalyticsService.recordEvent('HomeControllerVisited');
  this.pins = pins;
})
.directive('pin', function(AnalyticsService) {
  return {
    restrict: 'E',
    templateUrl: '/templates/pin.html',
    scope: {
      'pin': "=item"
    },
    link: function(scope, elem, attrs) {
      scope.toggleFav = function() {
        AnalyticsService.recordEvent('PinFaved');
        scope.pin.faved = !scope.pin.faved;
      }
    }
  }
})


//  
