angular.module('video-player')
.component('videoList', {

  bindings: {
    videos: '<'
  },

  controller: function(){
    // this.videos = window.exampleVideoData;
    // console.log('videoList', this.videos)
  },

  templateUrl: 'src/templates/videoList.html'
});
