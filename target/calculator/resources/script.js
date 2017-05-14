(function() {
	var app = angular.module('myCalculator', [])
		.controller('myCtrl', ['$scope', '$http' ,function($scope, $http) {
			$scope.count = 0;
			$scope.submitResult = function(f, o, s) {
				console.log(f + o + s);
				$http({
					method: 'GET',
					url: '/calculator/output/' + f + '/' + o + '/' + s
				}).then(_success, _error);
			};
			function _success(response) {
				console.log(response);
			}
			function _error(response) {
				console.log(response);
			}
		}]);
})();