(function() {
	var app = angular
			.module('myCalculator', [])
			.controller(
					'myCtrl',
					[
							'$scope',
							'$http',
							'$window',
							function($scope, $http, $window) {
								$scope.count = 0;
								$scope.submitResult = function(f, o, s) {
									console.log(f + o + s);
									if (o === '/') {
										o = 'divide';
									}
									success = true;
									if (typeof f == 'undefined' || f == ""
											|| typeof o == 'undefined'
											|| typeof s == 'undefined'
											|| s == "") {
										$window
												.alert("Proivde both input and select Operator");
										$scope.display = false;
										success = false;
									}
									if (success) {
										$http(
												{
													method : 'GET',
													url : '/calculator/output/'
															+ f + '/' + o + '/'
															+ s
												}).then(_success, _error);
									}
								};
								function _success(response) {
									$scope.display = true;
									$scope.result = response.data;
								}
								function _error(response) {
									console.log(response);
								}

								$scope.clear = function() {
									$scope.display = false;
									$scope.operator = null;
									$scope.firstInput = null;
									$scope.secondInput = null;
								}
							} ]);
})();