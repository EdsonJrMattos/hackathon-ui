import DS from 'ember-data';

export default DS.Model.extend({
  name:     DS.attr('string'),
  email:    DS.attr('string'),
  cnpj:      DS.attr('string'),
  phone:    DS.attr('string'),
  city:   DS.attr('string'),
  neighborhood:   DS.attr('string'),
  vacancys: DS.hasMany('vacancy', {async: true})
});
