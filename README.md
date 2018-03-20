torii-azure-ad2-provider
==============================================================================

This add-on adds a `azure-ad2-oauth2` provider to your Ember application. Torii itself must be installed in the app.

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
  var ENV = {

  // ... other ENV config stuff here

   ENV['torii'] = {
      providers: {
        'azure-ad2-oauth2': {
          tenantId: 'Azure app tenant ID',
          apiKey: 'Azure app client ID',
          redirectUri: 'http://localhost:4200/torii/redirect.html'
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

### Installation

* `git clone <repository-url>`
* `cd torii-azure-ad2-provider`
* `npm install`

### Linting

* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `npm test` – Runs `ember try:each` to test your addon against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
