import Ember from 'ember';

export default Ember.Component.extend({
  updateStoryForm: false,
  actions: {
    updateStoryForm() {
      this.set('updateStoryForm', true);
    },
    update(story) {
      var params = {
        headline: this.get('headline'),
        date: this.get('date'),
        author: this.get('author'),
        story: this.get('story'),
        image: this.get('image')
      };
      this.set('updateStoryForm', false);
      this.sendAction('update', story, params);
    }
  }
});
