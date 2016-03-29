import Ember from 'ember';

export default Ember.Component.extend({
  addNewStory: false,
  actions: {
    storyFormShow() {
      this.set('addNewStory', true);
    },

    saveStory() {
      var params = {
        headline: this.get('headline') ? this.get('headline') : "",
        date: this.get('date') ? this.get('date') : "",
        author: this.get('author') ? this.get('author') : "",
        story: this.get('story') ? this.get('story') : "",
        image: this.get('image') ? this.get('image') : ""
      };
      this.set('addNewStory', false);
      this.sendAction('saveStory', params);
    }
  }
});
