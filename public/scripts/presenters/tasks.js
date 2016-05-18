/**
 * Created by Sergi on 05/05/2016.
 */
define([
    'global',
    'api',
], function(G, Api){

    var Task = {}

    Task.init = function(P) {
        G.on('view:tasks:new', function (data) {
            Api.newTask(data)
                .then(G.trigger.bind(G, 'api:task:successful'))
                .catch(G.trigger.bind(G, 'api:task:error'))
                .done()
        })

        G.on('api:task:successful', function (task) { //Si la tasca es crea correctament, la inserim a la dashboard
            alert("Tasca creada correctament a la BDD")
            G.trigger('presenter:dashboard:newTask')
        })

       // G.on('api:task:error', P.Ui.errorAPI)
        G.on('api:task:error', function(param){

            alert("Error al crear la tasca a la BDD")
        })
    }
    return Task
})
