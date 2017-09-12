angular.module('video-player')

.component('app', {


  controller: function(){
    this.videos = window.exampleVideoData;
    this.currentVideo = this.videos[0];

    this.videoOnClick = (video) => {
      this.currentVideo = video
      // console.log('index', this.index);
      // console.log('vide',this.video);
      // console.log('event',event)
    };
  },

  templateUrl: 'src/templates/app.html'
});
