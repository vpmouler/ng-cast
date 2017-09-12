angular.module('video-player')

.component('search', {
  controller: () => {
    this.searchText = '';
  },
  bindings: {
    getSearchText: '<'
  },
  templateUrl: 'src/templates/search.html'
});
