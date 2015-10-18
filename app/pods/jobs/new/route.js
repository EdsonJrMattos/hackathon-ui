import Ember from 'ember';

export default Ember.Route.extend({
  model: function  () {
    return Ember.RSVP.hash({
      vacancy: this.store.createRecord('vacancy'),
      agency:   this.store.find('agency')
    });
  }
});
