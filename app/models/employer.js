import DS from 'ember-data';

export default DS.Model.extend({
  name:     DS.attr('string'),
  email:    DS.attr('string'),
  cpf:      DS.attr('string'),
  rg:       DS.attr('string'),
  phone:    DS.attr('string'),
  city:   DS.attr('string'),
  neighborhood:   DS.attr('string'),
  vacancys: DS.hasMany('vacancy', {async: true})
});
