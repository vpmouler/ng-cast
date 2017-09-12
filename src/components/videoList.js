angular.module('video-player')
.component('videoList', {

  bindings: {
    videos: '<',
    test: '<'
  },

  controller: function(){
    // this.videos = window.exampleVideoData;
  },

  templateUrl: 'src/templates/videoList.html'
});
