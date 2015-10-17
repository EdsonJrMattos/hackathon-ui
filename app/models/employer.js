import DS from 'ember-data';

export default DS.Model.extend({
  name:     DS.attr('string'),
  email:    DS.attr('string'),
  cpf:      DS.attr('string'),
  rg:       DS.attr('string'),
  phone:    DS.attr('string'),
  cidade:   DS.attr('string'),
  bairro:   DS.attr('string'),
  vacancys: DS.hasMany('vacancy', {async: true})
});
