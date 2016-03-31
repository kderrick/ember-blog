import Ember from 'ember';

var number = 0;

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
        post: this.get('post'),
        timestamp: number
      };
      this.set('showCommentForm', false);
      this.sendAction('saveComment', params);
      number++;
    }
  }
});
