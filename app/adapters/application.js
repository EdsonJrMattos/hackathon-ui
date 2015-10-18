import SailsRESTAdapter from 'ember-data-sails/adapters/sails-rest';
export default SailsRESTAdapter.extend({
  /**
   * The host of your API
   */
  host: 'http://10.150.254.114:1337',
  useCSRF: false,

  coalesceFindRequests: true,
    
  defaultSerializer: '-rest'
});
