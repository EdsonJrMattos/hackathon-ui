import ajax from 'ic-ajax';
import Ember from 'ember';
import environment from 'wego-admin-cli/config/environment';
import _ from 'lodash';

var get = Ember.get;

function packParams(type, data) {
  var params = {type: type};
  if (data) {
    params.data = data;
  }
  return params;
}

function ajaxToPanelError(error) {
  var panelError = new Ember.Error();
  panelError.message = get(error, 'jqXHR.responseJSON.error');
  panelError.statusCode = get(error, 'jqXHR.status');
  return Ember.RSVP.reject(panelError);
}

export default {
  apiHost: environment.apiBaseUrl || '',
  settings: {
    crossDomain: true,
    xhrFields: {
      withCredentials: true
    }
  },
  _buildUrl: function(url) {
    return this.apiHost + url;
  },
  _request: function (type, url, data, options) {
    var reqUrl = this._buildUrl(url);
    var reqParams = this.buildParams(packParams(type, data), options);
    return ajax(reqUrl, reqParams).catch(ajaxToPanelError);
  },

  buildParams: function () {
    return _.partial(_.extend, _.cloneDeep(this.settings)).apply(null, arguments);
  },
  get: function (url, data, options) {
    return this._request('GET', url, data, options);
  },
  post: function (url, data, options) {
    return this._request('POST', url, data, options);
  },
  put: function (url, data, options) {
    return this._request('PUT', url, data, options);
  },
  delete: function (url, data, options) {
    return this._request('DELETE', url, data, options);
  }
};
