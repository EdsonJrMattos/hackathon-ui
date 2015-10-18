import Ember from 'ember';

export default Ember.Controller.extend({
  agency:[{id:1,name:"banana"}],
  actions: {
      save:function () {
        this.get('model')
            .save();
      }
  }
});
