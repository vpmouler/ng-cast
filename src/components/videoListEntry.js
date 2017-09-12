angular.module('video-player')
.component('videoListEntry', {

  bindings: {
    video: '<',
    videoOnClick: '<',
    index: '<',
  },

  controller:  function () {

    this.logIndex = (video, event)=>{
      console.log('vide',video);
      console.log('event', event);
    }

    // var stringConcat = function () {
    //   console.log('lksadjflksdajf')
    //   return 'https://www.youtube.com/embed/' + this.video.id.videoId;
    // }

  },



  templateUrl: 'src/templates/videoListEntry.html'
});
