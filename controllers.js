angular.module('app.cute', [])
  .controller('CuteCtrl', function($scope) {
    
    $scope.images =["https://farm1.static.flickr.com/303/19534647013_385563d7fb.jpg", "https://farm9.static.flickr.com/8707/16975158360_7994f33d55.jpg", "https://farm3.static.flickr.com/2918/13440486784_aeef824128.jpg", "https://farm3.static.flickr.com/2839/11341236855_a5671e8a02.jpg", "https://farm8.static.flickr.com/7098/7221542414_f17a01f008.jpg", "https://farm8.static.flickr.com/7101/7221357548_44a923a1f4.jpg", "https://farm8.static.flickr.com/7225/7221242716_77b4c5a51f.jpg", "https://farm8.static.flickr.com/7232/7221074648_85b9528d61.jpg", "https://farm8.static.flickr.com/7077/7221066774_b90b153ee0.jpg", "https://farm8.static.flickr.com/7211/7221058902_d64a10271a.jpg"]
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
        $scope.winner = label;
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

    