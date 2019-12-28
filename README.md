torii-azure-ad2-provider
==============================================================================

This add-on adds a `azure-ad2-oauth2` provider to your Ember application. Torii itself must be installed in the app.


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.8 or above
* Ember CLI v2.13 or above
* Node.js v8 or above


Installation
------------------------------------------------------------------------------

```bash
ember install torii
ember install torii-azure-ad2-provider
```


Usage
------------------------------------------------------------------------------

Edit `/config/environment.js` and add your Torii provider configuration:

```javascript
module.exports = function(environment) {
  let ENV = {

  // ... other ENV config stuff here

   torii: {
      providers: {
        'azure-ad2-oauth2': {
          tenantId: 'Azure app tenant ID',
          apiKey: 'Azure app client ID',
          redirectUri: 'http://localhost:4200/torii/redirect.html'
        }
      }
    }
  }

  return ENV;
};
```

Options that can be configured:

| Option | Required | Default | Description |
|--------|----------|---------|-------------|
| apiKey | x | | Application ID of your app |
| tenantId | | common | Tenant value in the path of the authorize request |
| scope | | offline_access User.Read | A space-separated list of scopes that you want the user to consent to |
| redirectUri | | | Redirect URI of the app for the authentication response |


Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
