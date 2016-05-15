define([
  'global',
  'api'
], function (G, Api) {

  var Task = {}

  Task.init =  function (P) {

      G.on('view:login:request', function (username, password) {
        Api.login({username: username, password: password})
          .then(G.trigger.bind(G, 'api:login:successful'))
          .catch(G.trigger.bind(G, 'api:login:error'))
          .done()
      })

      G.on('api:createtask:successful', function (task) {
        G.localStorage.setItem('task', task);
        //G.trigger('presenter:switch-ui:home')
      })

      G.on('api:createtask:error', P.Ui.errorAPI)

      G.on('view:task:request', function (data) {
        Api.signup(data)
          .then(G.trigger.bind(G, 'api:signup:successful'))
          .catch(G.trigger.bind(G, 'api:signup:error'))
          .done()
      })

      G.on('api:signup:successful', function (task) { //la promesa m'ha retornat successful, vaig al home
        G.trigger('presenter:switch-ui:home')
      })

      G.on('api:signup:error',  P.Ui.errorAPI)

    }

  return Task

})