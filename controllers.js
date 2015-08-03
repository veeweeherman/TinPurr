angular.module('app.controllers', [])
  .controller('CuteCtrl', function($scope) {
    // $scope.images = [{
    //    src: '/img/vy1.jpg',
    //     title: 'Pic 1'
    //   }, {
    //     src: '/img/vy5.jpg',
    //     title: 'Pic 2'
    //   }
    // ];

    // for mvp reasons lets just use strings first...
    $scope.images = [
      'string1',
      'string2'
    ];

    $scope.counts = {};
    $scope.total = 0;

    $scope.max_candidate = "";
    $scope.max_count = 0;
    
    $scope.upVote = function(x, label){
      if (!$scope.counts.hasOwnProperty(x))
        $scope.counts[x] = 0;
      var count = ++$scope.counts[x];
      if (count > $scope.max_count) {
        $scope.max_count = count;
        $scope.max_candidate = label;
      }
      $scope.total++;
    }

    $scope.max_percentage = function() {
      if ($scope.max_count === 0 || $scope.total === 0)
        return 0;
      var frac = $scope.max_count / $scope.total * 100;
      return Math.round(frac * 10) / 10;
    }

    $scope.loadPics = function(){
      //how to load 2 pics from array onto page
    }
  });