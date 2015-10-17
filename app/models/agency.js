import DS from 'ember-data';

export default DS.Model.extend({
  name:  DS.attr('string'),
  email: DS.attr('string'),
  cnpj:  DS.attr('string'),
  phone: DS.attr('string'),
  companyName: attr('string'),
  candidates: DS.hasMany('candidate', {async: true}),
  employers: DS.hasMany('employer', {async: true}),
  employerPending: DS.hasMany('employer', {async: true}),
  vacancys: DS.hasMany('vacancys', {async: true})
});
