import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.route('dashboard',{path: '/'});
  this.route('settings');
  this.route('employer', function() {
    this.route('new');
  });
  this.route('candidate', function() {
    this.route('show');
  });
  this.route('jobs', function() {
    this.route('new');
  });
  this.route('profile');
  this.route('home');
});
