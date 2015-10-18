import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
      save:function () {
        this.get('model.candidate')
            .save()
            .then(this.transitionToRoute('candidate.show'));
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
