import Ember from 'ember';

export default Ember.Route.extend({
  model: function  () {
    return Ember.RSVP.hash({
      candidate: this.store.createRecord('candidate'),
      competence: this.store.createRecord('competence'),
      agency:   this.store.find('agency')
    });
  }
});
