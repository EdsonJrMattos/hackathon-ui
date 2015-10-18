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
    this.route('new');
  });
  this.route('jobs', function() {
    this.route('new');
    this.route('show');
  });
  this.route('profile');
  this.route('home');
  this.route('agency', function() {
    this.route('new');
  });
  this.route('home-agency');
  this.route('home-finalize');
  this.route('home-finalize-success');
  this.route('home-finalize-2');
  this.route('login');
});
