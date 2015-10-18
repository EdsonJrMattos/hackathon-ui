import Ember from 'ember';

export default Ember.Controller.extend({
  employer:[{id:1,name:"banana"}],
  actions: {
      save:function () {
        this.get('model')
            .save();
      }
  }
});
