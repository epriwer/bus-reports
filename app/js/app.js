var app = angular.module('busReports', []);

app.controller('busReportsCtrl', ['$scope', function($scope) {

  $scope.busReports = { "data":[ { "organisation":"Sydney Buses", "date":"25/09/2015", "busData":[ { "busId":"42612", "routeVariant":"891 2 1", "deviationFromTimetable":77 }, { "busId":"29016", "routeVariant":"400 1 1", "deviationFromTimetable":340 }, { "busId":"90467", "routeVariant":"393 1 1", "deviationFromTimetable":220 }, { "busId":"88836", "routeVariant":"M20 1 0", "deviationFromTimetable":-287 }, { "busId":"79367", "routeVariant":"L21 2 1", "deviationFromTimetable":347 } ] }, { "organisation":"Westbus", "date":"25/09/2015", "busData":[ { "busId":"94811", "routeVariant":"664 2 1", "deviationFromTimetable":164 }, { "busId":"62788", "routeVariant":"UNKNOWN", "deviationFromTimetable":null }, { "busId":"14221", "routeVariant":"834 1 1", "deviationFromTimetable":423 } ] } ] };
          
}]);

app.directive('busStatus', function() {
  
  var LATENESS_THRESHOLD_SECS = 5 * 60;
  
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
     
      var displayStatus;
      var className;
      
      if(angular.isUndefined(scope.bus.deviationFromTimetable) || scope.bus.deviationFromTimetable === null) {
        displayStatus = "Unknown";
        className = "unknown";
      }
      else if(scope.bus.deviationFromTimetable < 0) {
        displayStatus = "Early";
        className = "early";
      }
      else if(scope.bus.deviationFromTimetable >= 0 && scope.bus.deviationFromTimetable < LATENESS_THRESHOLD_SECS) {
        displayStatus = "On Time";
        className = "on-time";
      }
      else if(scope.bus.deviationFromTimetable >= LATENESS_THRESHOLD_SECS) {
        displayStatus = "Late";
        className = "late";
      }
      
      element.html(displayStatus);
      element.addClass(className);
    }
  };
});