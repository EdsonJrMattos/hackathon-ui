import Ember from 'ember';

export default Ember.Controller.extend({
  empresas: ['Teste1'],
  actions: {
      save:function () {
        var model = this.get('model.vacancy');
        this.store.find('employer')
            .then(data=>{
              model.set('employer',data.get('firstObject'));
              model.save()
                   .then(this.transitionToRoute('jobs.show'));
            });
      },
      Addcompetence:function  () {
        var model = this.get('model.candidate');
        model.get('competences')
             .pushObject(this.store.createRecord('competence',{
               name:this.get('competence')
             }));
        this.set('competence','');
      }
  }
});
