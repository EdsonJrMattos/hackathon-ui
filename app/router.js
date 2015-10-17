import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.route('dashboard');
  this.route('settings');
  this.route('employer');
  this.route('candidate');
});
