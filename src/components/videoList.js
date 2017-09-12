angular.module('video-player')
.component('videoList', {
  controller: function(){
    this.videos = window.exampleVideoData;
    console.log('videoList', this.videos)
  },
  //
  // bindings: {
  //   videos: '<'
  // },

  templateUrl: 'src/templates/videoList.html'
});
