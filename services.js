angular.module('app.services', [])
	.factory('Flickr', function($http){
		var getCats = function() {
			return $http({
				method: 'GET',
				url:'https://query.yahooapis.com/v1/public/yql?',
				params: {
					q: "select * from flickr.photos.search where has_geo='true' and tags='funny cats' and api_key='c4f57fcf22dcb4274f71bbacc7550f0c'",
					format:'json',
					callback: function yqlCallback(data) {
      console.log('this is flickr cat data',data);
      var photoArr = data.query.results.photo; //
      alert(photoArr[0].title)
						
     
					}
				}
			})
			.then(function(resp){
				return resp.data;
			});
		};
		return {
			getCats: getCats
		}
	})

// <script src="https://query.yahooapis.com/v1/public/yql?q=select * from flickr.photos.search where has_geo='true' and tags='funny cats' and api_key='c4f57fcf22dcb4274f71bbacc7550f0c'&format=json&callback=yqlCallback"></script>