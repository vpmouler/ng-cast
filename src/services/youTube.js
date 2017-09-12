angular.module('video-player')
.service('youTube', function($http){
  this.search = function(text, cb) {
    $http({
      type:'GET',
      url:'https://www.googleapis.com/youtube/v3/search',
      params: {
        q: text || 'jordan body curtain advance',
        max: 5,
        key: window.YOUTUBE_API_KEY,
        part: 'snippet'
      }}).then(function(data) {console.log(cb),cb(data)}, function() {console.log('FAILED')})
  }
});
