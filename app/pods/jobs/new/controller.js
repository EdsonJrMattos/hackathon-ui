import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
      save:function () {
        var model = this.get('model.vacancy');
        this.store.find('employer')
            .then(data=>{
              model.set('employer',data.get('firstObject'));
              model.save()
                   .then(this.transitionToRoute('jobs.show'));
            });
      }
  }
});
