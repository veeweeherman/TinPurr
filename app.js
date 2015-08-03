angular.module('app', [])
	.controller('cuteCtrl', function($scope){
		$scope.imageLocations = [
			'/img/vy1.jpg',
			'/img/vy1.jpg'
		]
	})
// insert two images onto page
// make a vote button for pic 1 or pice 2
// keep count
// write to text file the count, so when refreshed it keeps count