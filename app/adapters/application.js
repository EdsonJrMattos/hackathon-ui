import SailsRESTAdapter from 'ember-data-sails/adapters/sails-rest';
export default SailsRESTAdapter.extend({
  /**
   * The host of your API
   */
  host: 'http://localhost:1337',
  /**
   * Whether to use CSRF tokens or not
   */
  useCSRF: false,
  /**
   * Whether to group multiple find by ID with one request with a `where`
   */
  coalesceFindRequests: true
});
