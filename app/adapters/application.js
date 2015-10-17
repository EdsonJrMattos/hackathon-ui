import SailsRESTAdapter from 'ember-data-sails/adapters/sails-rest';
import ajax from 'hackathon-ui/utils/ajax';
export default SailsRESTAdapter.extend({
  /**
   * The host of your API
   */
  host: ajax.apiHost,
  /**
   * Whether to use CSRF tokens or not
   */
  useCSRF: false,
  /**
   * Whether to group multiple find by ID with one request with a `where`
   */
  coalesceFindRequests: true
});
