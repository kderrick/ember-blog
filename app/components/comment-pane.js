import Ember from 'ember';

export default Ember.Component.extend({
  sortedComments: Ember.computed.sort('comments', 'sorting'),
  sorting: ['timestamp:asc'],
  actions: {
    delete(comment) {
      if (confirm('Are you sure you want to delete this comment?')) {
        this.sendAction('destroyComment', comment);
      }
    },
    update(comment, params ) {
      this.sendAction('update', comment, params);
    }
  }
});
