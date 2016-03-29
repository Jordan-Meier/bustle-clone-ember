import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  date: DS.attr(),
  headline: DS.attr(),
  story: DS.attr(),
  image: DS.attr()
});
