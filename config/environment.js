/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'hackathon-ui',
    podModulePrefix: 'hackathon-ui/pods',
    environment: environment,
    usePodsByDefault: true,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
      emberDataSails:  {
        // default is to use same host and port as the ember app:
        host: 'http://localhost:1337',
        // this is the default and is the path to the sails io script:
        scriptPath: '/js/dependencies/sails.io.js'
      }
    }
  };
  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.apiBaseUrl = 'http://10.150.254.114:1337';
  }
  if (environment === 'staging'){
    ENV.apiBaseUrl = 'http://10.150.254.114:1337';
  }
  if (environment === 'production') {
    ENV.apiBaseUrl = 'http://10.150.254.114:1337';
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }
  return ENV;
};
