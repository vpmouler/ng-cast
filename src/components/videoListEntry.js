angular.module('video-player')
.component('videoListEntry', {

  bindings: {
    video: '<'
  },

  controller:  function () {
    setTimeout(()=> {console.log('video entry video', this)},500);
  },

  templateUrl: 'src/templates/videoListEntry.html'
});
