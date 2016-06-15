/**
 * Created by Sergi on 15/06/2016.
 */
define(['backbone'],
    function(Backbone){
        var TeamModel = Backbone.Model.extend({
            url: "/api/users/self/team"
        });
        return TeamModel;
    });