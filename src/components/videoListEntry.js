angular.module('video-player')
.component('videoListEntry', {

  bindings: {
    video: '<',
    videoOnClick: '<'
  },

  controller:  function () {

    // var stringConcat = function () {
    //   console.log('lksadjflksdajf')
    //   return 'https://www.youtube.com/embed/' + this.video.id.videoId;
    // }

  },



  templateUrl: 'src/templates/videoListEntry.html'
});
