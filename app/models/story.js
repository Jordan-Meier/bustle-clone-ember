import DS from 'ember-data';

export default DS.Model.extend({
  headline: DS.attr(),
  date: DS.attr(),
  author: DS.attr(),
  story: DS.attr(),
  image: DS.attr()
});
