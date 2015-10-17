import DS from 'ember-data';

export default DS.Model.extend({
  title:        DS.attr('string'),
  description:  DS.attr('string'),
  agency:       DS.belongsTo('agency', {async: true}),
  employer:     DS.belongsTo('employer', {async: true}),
  candidatos:   DS.hasMany('candidate', {async: true}),
  interview:    DS.hasMany('interview', {async: true})
});
