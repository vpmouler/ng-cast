angular.module('video-player')

.component('app', {


  controller: function(){
    this.videos = window.exampleVideoData
    this.currentVideo = this.videos[0]

    this.videoOnClick = (index) => {
      // this.currentVideo = this.video[index];
      console.log(this)
      console.log('index', index)
    }
  },

  templateUrl: 'src/templates/app.html'
})
