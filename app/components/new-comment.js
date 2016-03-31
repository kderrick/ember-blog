import Ember from 'ember';

export default Ember.Component.extend({
  showCommentForm: false,
  actions: {
    showCommentForm() {
      this.set('showCommentForm', true);
    },

    saveComment() {
      var params = {
        author: this.get('author'),
        text: this.get('text'),
        post: this.get('post')
      };
      this.set('showCommentForm', false);
      this.sendAction('saveComment', params);
    }
  }
});
