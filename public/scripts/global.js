define(['backbone', 'underscore'], function(Backbone, _) {

  // Add JWT token to each Backbone sync call
  var backboneSync = Backbone.sync
  Backbone.sync = function (method, model, options) {
    var user = Global.localStorage.getItem('user')
    var token = user && user.jwt

    if (token) {
      options.headers = {
        'Authorization': 'Bearer ' + token
      }
    }

    // call the original function
    backboneSync(method, model, options)
  }

  var Global = _.extend({
    localStorage: {}
  }, Backbone.Events)

  // Add convenience JSON parse/stringigy functions to Global
  var ls = Global.localStorage
  ls.setItem = function (key, obj) {
    window.localStorage.setItem(key, JSON.stringify(obj))
    Global.trigger('localstorage:set:' + key, obj)
  }
  ls.getItem = function (key) {
    var str = window.localStorage.getItem(key)
    if (str) {
      return JSON.parse(str)
    }
  }
  ls.hasItem = function (key) {
    return window.localStorage.hasOwnProperty(key)
  }
  ls.removeItem = function (key) {
    window.localStorage.removeItem(key)
    Global.trigger('localstorage:remove:' + key)
  }

  // Add Backbone and underscore as attributes of Global for convenience
  Global.Backbone = Backbone
  Global._ = _

  return Global
})
