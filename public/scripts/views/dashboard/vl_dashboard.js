/**
 * Created by puig on 28/4/16.
 */
define([
    'global',
    // Using the Require.js text! plugin, we are loaded raw text
    // which will be used as our views primary template
    'text!/templates/dashboard/dashboard.html',
    'text!/templates/task/contentTask.html',
    'models/m_task'
], function(G, tl_dashboard, tl_task, Tasca) {

    //nova pissarra
    var Dashboard = G.Backbone.View.extend({

        className: 'container',

        initialize: function() {
            this.template = G._.template(tl_dashboard);
            this.templateTask = G._.template(tl_task);
        },

        codiRep: function(){
            alert("proveta")
        },


        events:{ //tots els events
            'click #buttonOpenDashboard': 'openDashboard',
            'click #buttonSaveChanges': 'createTask'
        },

        openDashboard: function(){ //passar aqui lho de la llista
            G.trigger('view:dashboard:create')
        },

        createTask: function(){ //hem capturat el boto de guardar canvis de crear tasca
            this.codiRep();
            if((this.$('[name=titol]').val() != '') && (this.$('[name=descripcio]').val() != '')) {
                //$('#myModal').modal({ keyboard: false })
                //definicio classe fasca

                var _tasca= new Tasca({name: this.$('[name=titol]').val(), description: this.$('[name=descripcio]').val(), taskState: "notAssigned"});

                //amagem el modal i reiniciem el contingut al fer el hidden quan salta l'event amagat
                this.$el.find('#myModal').modal('hide');
                this.$el.find('#myModal').on('hidden.bs.modal', function () {
                    //this és el modal
                    $(this).find('.modal-body input').val('')
                    $(this).find('.modal-body textarea').val('')
                })

                //obtenim dades de la tasca
                var tit= this.$('[name=titol]').val()
                var inf= this.$('[name=descripcio]').val()


                //tasca js passant titol i missatge al template
                var newTask = $(this.templateTask({title: tit, message: inf}));

                var $divContentTask= this.$el.find('#notAssignedTask').first(); //accedint a un element del DOM, continua sent un selector, pero cal find perque esta en un altre html
                var $divAssignedTask= this.$el.find('#assignedTask').first();
                var $divFinishTask= this.$el.find('#finishTask').first();

                $divContentTask.append(newTask);

                newTask.find('.btn-primary').click(function(){
                    //d'aquest botò d'aquesta tasca en concret li programo el click
                    $(this).html('Tancar Tasca');
                    $(this).closest('div').parent().remove();

                    //posare la tasca al div assigned
                    var tascaOberta= $(this).closest('div').parent();
                    $divAssignedTask.append(tascaOberta);

                    //_tasca.set({taskState: "assigned"})

                    newTask.find('.btn-primary').click(function(){
                        $(this).hide();
                        $(this).closest('div').parent().remove();

                        var tascaTancada= $(this).closest('div').parent();
                        $divFinishTask.append(tascaTancada);

                        //_tasca.set({taskState: "finish"})
                    })

                })
            } else alert("Els camps no poden estar buits")
            //el is basically a reference to a DOM element
            // and all views must have one. Views can use el
            // to compose their element’s content and then insert it
            // into the DOM all at once

            //jquery ($= function)es una function(), per accedir al dom
            //si es un objecte fa , si es objecte del dom li afegeix la seva api
            //si li passes string, diu es un selector: busca elements
            //si es html compila i retorna
            // llavors el find amb un selector find('openbutton') et retorna un array
            //per aixo cal first o get(0) o get(14)

            //Guardem a la BDD la tasca nova

            var taskLists= this.collection;
            _tasca.save(null, {
                success: function (model, response) {
                    console.log("success");
                    taskLists.add(_tasca);
                },
                error: function (model, response) {
                    console.log("error");
                }
            });


            this.collection= taskLists;
            for (var i=0; i<this.collection.length; i++) { console.log("length: "+this.collection.length); }


        },

        render: function() {
            this.$el.html(this.template({dashboard: this.collection}))
            console.log("L: "+this.collection.length);

            for(var i=1; i<= this.collection.length; i++) {
                var _task = this.collection.get(i);
                var n = _task.get("name");
                var d = _task.get("description");

                //tasca js passant titol i missatge al template
                var newTask = $(this.templateTask({title: n, message: d}));

                var $divContentTask = this.$el.find('#notAssignedTask').first(); //accedint a un element del DOM, continua sent un selector, pero cal find perque esta en un altre html
                var $divAssignedTask = this.$el.find('#assignedTask').first();
                var $divFinishTask = this.$el.find('#finishTask').first();

                $divContentTask.append(newTask);

                newTask.find('.btn-primary').click(function () {
                    //d'aquest botò d'aquesta tasca en concret li programo el click
                    $(this).html('Tancar Tasca');
                    $(this).closest('div').parent().remove();

                    var tascaOberta = $(this).closest('div').parent();
                    $divAssignedTask.append(tascaOberta);

                    newTask.find('.btn-primary').click(function () {
                        $(this).hide();
                        $(this).closest('div').parent().remove();
                        var tascaTancada = $(this).closest('div').parent();
                        $divFinishTask.append(tascaTancada);
                    })

                })
            }

            return this
        }

    });

    return Dashboard
});