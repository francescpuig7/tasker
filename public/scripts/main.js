require.config({
  shim : {
    bootstrap : { deps :['jquery'] }
  },
  paths: {
    jquery: 'libs/jquery.min',
    bootstrap: "libs/bootstrap.min",
    underscore: 'libs/underscore-min',
    backbone: 'libs/backbone-min',
    promises: 'libs/bluebird.min',
    text: 'libs/text',
    global: 'global'
  },
  packages: [
    {
      name: 'presenters',
      main: 'index'
    }
  ]
});

require([
  'global',
  'app'
], function (Global, App) {

  // This deletes the user information in startup for debugging purposes
  // SHOULD NOT GO IN PRODUCTION
 // Global.localStorage.removeItem('user')
  App.init()
})