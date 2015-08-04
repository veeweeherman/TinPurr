angular.module('app.flickr', [])
  .controller('FlickrCtrl', function($scope, $http) {
    $scope.images =["https://farm1.static.flickr.com/303/19534647013_385563d7fb.jpg", "https://farm9.static.flickr.com/8707/16975158360_7994f33d55.jpg", "https://farm3.static.flickr.com/2918/13440486784_aeef824128.jpg", "https://farm3.static.flickr.com/2839/11341236855_a5671e8a02.jpg", "https://farm8.static.flickr.com/7098/7221542414_f17a01f008.jpg", "https://farm8.static.flickr.com/7101/7221357548_44a923a1f4.jpg", "https://farm8.static.flickr.com/7225/7221242716_77b4c5a51f.jpg", "https://farm8.static.flickr.com/7232/7221074648_85b9528d61.jpg", "https://farm8.static.flickr.com/7077/7221066774_b90b153ee0.jpg", "https://farm8.static.flickr.com/7211/7221058902_d64a10271a.jpg"]
// console.log('HELLOOOOOOOO FLICKRCTRL');
//     $scope.urlArr = [];

//     $scope.yqlCallback = function(data) {
//       console.log('data', data)
//       Flickr.getCats();
//       .then(function(data){
//         return data;
//       })
//       .catch(function(error){
//         console.error(error);
//       })
//     };
//       $scope.yqlCallback();
  })
    

    
// <img src="https://farm"+farmId+".static.flickr.com/"+serverId+"/"+id1+"_"+secret+".jpg">
//     img src doesnt have access to variables inside yqlCallback function -->
//      maybe put the yql call back in another file and reference to html page
//     and somehwo get access to the data object to create the correct strings/urls for images
//     then use angular ng-repeat to randomly (by index number) display only 2 imgs per vote
//     needs to redirect to new 2 cat imgs once a vote has been cast -->



    // console.log("https://farm"+farmId+".static.flickr.com/"+serverId+"/"+id1+"_"+secret+".jpg")
