import DS from 'ember-data';

export default DS.Model.extend({
  name:     DS.attr('string'),
  email:    DS.attr('string'),
  cpf:      DS.attr('string'),
  rg:       DS.attr('string'),
  phone:    DS.attr('string'),
  city:   DS.attr('string'),
  neighborhood:   DS.attr('string'),
  vacancys: DS.hasMany('vacancy', {async: true}),
  agency:   DS.belongsTo('agency', {async: true}),
  interviews: DS.hasMany('interview', {async: true}),
  notes: DS.hasMany('note', {async: true}),
  competences: DS.hasMany('competence', {async: true}),
});
