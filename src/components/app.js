angular.module('video-player')

.component('app', {


  controller: function(youTube){



    this.videoOnClick = (video) => {
      this.currentVideo = video
    };

    this.setNewData = (data) => {
      this.videos = data.data.items;
      this.currentVideo = this.videos[0];
    }

    this.getSearchText = (text) => {

      youTube.search(text, this.setNewData)
    }
    this.videos = youTube.search('cats',this.setNewData);

  },

  templateUrl: 'src/templates/app.html'
});
