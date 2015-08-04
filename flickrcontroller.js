angular.module('app.controllers', [])
  .controller('FlickrCtrl', function($scope) {

  $scope.urlArr = [];

  $scope.yqlCallback = function(data) {
    console.log('this is flickr cat data',data);
    var photoArr = data.query.results.photo; //array of photos in data object
    var photo = data.query.results.photo[0];

    // var farmId = data.query.results.photo[0].farm;
    // var serverId = data.query.results.photo[0].server;
    // var id1 = data.query.results.photo[0].id;
    // var secret = data.query.results.photo[0].secret;

    for (var i = 0; i < photoArr.length; i++) {
      // string concat of the url link
      urlArr.push("https://farm" +
      photoArr[i].farm +".static.flickr.com/"+
      photoArr[i].server +"/"+
      photoArr[i].id +"_"+
      photoArr[i].secret +".jpg")
    };

    // console.log("https://farm"+farmId+".static.flickr.com/"+serverId+"/"+id1+"_"+secret+".jpg")
    console.log('urlArr :',urlArr)
    alert(photo.title);
  };
</script>
    
<script src="https://query.yahooapis.com/v1/public/yql?q=select * from flickr.photos.search where has_geo='true' and tags='funny cats' and api_key='c4f57fcf22dcb4274f71bbacc7550f0c'&format=json&callback=yqlCallback"></script>
    
// <img src="https://farm"+farmId+".static.flickr.com/"+serverId+"/"+id1+"_"+secret+".jpg">
//     img src doesnt have access to variables inside yqlCallback function -->
//      maybe put the yql call back in another file and reference to html page
//     and somehwo get access to the data object to create the correct strings/urls for images
//     then use angular ng-repeat to randomly (by index number) display only 2 imgs per vote
//     needs to redirect to new 2 cat imgs once a vote has been cast -->




})