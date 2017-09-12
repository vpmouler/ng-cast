angular.module('video-player')
.component('videoList', {

  bindings: {
    videos: '<',
    videoOnClick: '<'
  },

  controller: function(){

  },

  templateUrl: 'src/templates/videoList.html'
});
