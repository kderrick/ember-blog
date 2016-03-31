import Ember from 'ember';

export default Ember.Component.extend({
  showCommentUpdate: false,
  actions: {
    showCommentUpdate() {
      this.set('showCommentUpdate', true);
    },
    update(comment) {
      var params = {
        author: this.get('author'),
        text: this.get('text'),
      };
      this.set('showCommentUpdate', false);
      this.sendAction('update', comment, params);
    }
  }
});
