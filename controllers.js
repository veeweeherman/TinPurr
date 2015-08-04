angular.module('app.cute', [])
  .controller('CuteCtrl', function($scope) {
    
    $scope.images = [{
        src: 'img/cat1.jpg',
        title: 'Formal Cat'
      }, {
        src: 'img/cat2.jpg',
        title: 'Happy Cat'
      },
      {
        src: 'img/cat3.jpg',
        title: 'Sassy Cat'
      },{
        src: 'img/cat4.jpg',
        title: 'Lover Cats'
      },
    ];

    $scope.quantity = Math.floor(Math.random() * $scope.images.length) +1
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
  })

    