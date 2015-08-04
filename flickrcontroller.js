angular.module('app.flickr', [])
  .controller('FlickrCtrl', function($scope, $http) {

    $scope.urlArr = [];

    $scope.yqlCallback = function(data) {
      Flickr.getCats();
      // .then(function(){

      // })
      // .catch(function(error){
      //   console.error(error);
      // })
    };
      $scope.yqlCallback();
  })
    

    
// <img src="https://farm"+farmId+".static.flickr.com/"+serverId+"/"+id1+"_"+secret+".jpg">
//     img src doesnt have access to variables inside yqlCallback function -->
//      maybe put the yql call back in another file and reference to html page
//     and somehwo get access to the data object to create the correct strings/urls for images
//     then use angular ng-repeat to randomly (by index number) display only 2 imgs per vote
//     needs to redirect to new 2 cat imgs once a vote has been cast -->



    // console.log("https://farm"+farmId+".static.flickr.com/"+serverId+"/"+id1+"_"+secret+".jpg")
