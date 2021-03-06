import Oauth2 from 'torii/providers/oauth2-code';
import { configurable } from 'torii/configuration';
import { computed } from '@ember/object';

/**
 * This class implements authentication against Azure AD 2.0
 * using the OAuth2 authorization flow in a popup window.
 */
export default Oauth2.extend({
  name: 'azure-ad2-oauth2',

  baseUrl: computed('tenantId', function() {
    return `https://login.microsoftonline.com/${this.get('tenantId')}/oauth2/v2.0/authorize`;
  }),

  responseParams: Object.freeze(['code', 'state']),

  init() {
    this._super(...arguments);
    // Overwrite the default settings of the superclass Oauth2 provider.
    // If we don't use set, but set the property directly on the class,  Ember will merge both arrays
    this.set('requiredUrlParams', ['response_type', 'client_id', 'redirect_uri', 'state', 'scope']);
    this.set('optionalUrlParams', ['response_mode', 'prompt', 'login_hint', 'domain_hint']);
  },

  tenantId: configurable('tenantId', 'common'),
  scope: configurable('scope', 'offline_access User.Read'),
  responseMode: configurable('responseMode', 'query'),
  prompt: configurable('prompt', null),
  login_hint: configurable('login_hint', null),
  domain_hint: configurable('domain_hint', null),

  redirectUri: configurable('redirectUri', function() {
    return this._super();
  })
});
