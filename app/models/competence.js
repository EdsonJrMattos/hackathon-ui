import DS from 'ember-data';

export default DS.Model.extend({
  name:  DS.attr('string'),
  candidate: DS.belongsTo('candidate', {async: true}),
});
