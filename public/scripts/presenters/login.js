define([
  'global',
  'api'
], function (G, Api) {

  var Login = {}

  Login.init =  function (P) {

      G.on('view:login:request', function (username, password) {
        Api.login({username: username, password: password})
          .then(G.trigger.bind(G, 'api:login:successful'))
          .catch(G.trigger.bind(G, 'api:login:error'))
          .done()
      })

      G.on('api:login:successful', function (user) {
        G.localStorage.setItem('user', user);
        G.trigger('presenter:switch-ui:home')
      })

      G.on('api:login:error', P.Ui.errorAPI)

      G.on('view:signup:request', function (data) {
        Api.signup(data)
          .then(G.trigger.bind(G, 'api:signup:successful'))
          .catch(G.trigger.bind(G, 'api:signup:error'))
          .done()
      })

      G.on('api:signup:successful', function (user) {
        G.trigger('presenter:switch-ui:home')
      })

      G.on('api:signup:error',  P.Ui.errorAPI)

    }

  return Login

})