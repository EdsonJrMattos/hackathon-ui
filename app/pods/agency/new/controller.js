import Ember from 'ember';

export default Ember.Controller.extend({
  employer:[{id:1,name:"banana"}],
  actions: {
      save:function () {
        var model = this.get('model');
        // this.store.find('agency').then(data=>console.log(data));
        // var id = {id:1,name:"banana"};
        // model.set('employer',id);
        model.save()
              .then(data =>this.transictionToRoute('jobs.show'));
      }
  }
});
