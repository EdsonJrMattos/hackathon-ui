import DS from 'ember-data';

export default DS.Model.extend({
  vacancy:   DS.belongsTo('vacancy', {async: true}),
  candidate: DS.belongsTo('candidate', {async: true}),
  check:     DS.attr('boolean')
});
