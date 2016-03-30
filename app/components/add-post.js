import Ember from 'ember';

export default Ember.Component.extend({
  addPostForm: false,
  actions: {
    addPostForm() {
      this.set('addPostForm', true);
    },
    save() {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        text: this.get('text'),
        image: this.get('image')
      }
      this.set('addPostForm', false);
      this.sendAction('save', params);
    }
  }
});
