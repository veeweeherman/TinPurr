angular.module('app.controllers', [])
  .controller('CuteCtrl', function($scope) {
    
    $scope.images = [{
        src: 'img/vy1.jpg',
        title: 'Pic 1'
      }, {
        src: 'img/vy5.jpg',
        title: 'Pic 2'
      }
    ];

    $scope.counts = {};
    $scope.total = 0;

    $scope.winner = "";
    $scope.maxCount = 0;
    
    $scope.upVote = function(x, label){
      if (!$scope.counts.hasOwnProperty(x))
        $scope.counts[x] = 0;
      var count = ++$scope.counts[x];
      if (count > $scope.maxCount) {
        $scope.maxCount = count;
        $scope.winner = label.title;
      }
      $scope.total++;
    }

    $scope.percent = function() {
      if ($scope.maxCount === 0 || $scope.total === 0)
        return 0;
      var frac = $scope.maxCount / $scope.total * 100;
      return Math.round(frac * 10) / 10;
    }

    $scope.loadPics = function(){
      //how to load 2 pics from array onto page
    }
  });