angular.module('app.cute', [])
  .controller('CuteCtrl', function($scope, $http) {
    
  
    $scope.urlArr = [];
    $scope.random = function shuffle(o){
      for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), 
        x = o[--i], o[i] = o[j], o[j] = x);
      return o;
      }

    $scope.quantity = 2
    $scope.counts = {};
    $scope.total = 0;

    $scope.winner = "";
    $scope.maxCount = 0;

    $scope.getCats = function() {
      
      $http.get("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20flickr.photos.search%20where%20has_geo%3D'true'%20and%20tags%3D'funny%20cats'%20and%20api_key%3D'c4f57fcf22dcb4274f71bbacc7550f0c'%3B&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys")
        .success(function (data){
            console.log('this is flickr data :',data)
            
            var photoArr = data.query.results.photo
            for (var i = 0; i < photoArr.length; i++) {
            var newObj = {};
            // string concat of the url link
            newObj['title'] = photoArr[i].title
            newObj['url'] = "https://farm" +
            photoArr[i].farm +".static.flickr.com/"+
            photoArr[i].server +"/"+
            photoArr[i].id +"_"+
            photoArr[i].secret +".jpg"
            $scope.urlArr.push(newObj);
          };
          console.log('urlObj :',$scope.urlObj)
          console.log('$scope.urlArr :',$scope.urlArr)

        })
        .error(function(err) {
        console.log('ERROR: ', err);
      })
    }
    $scope.getCats();
    $scope.upVote = function(x, label, event){
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

    