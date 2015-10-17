import DS from 'ember-data';

export default DS.Model.extend({
  description:  DS.attr('string'),
  employer: DS.belongsTo('employer', {async: true}),
  candidate: DS.belongsTo('candidate', {async: true})
});
