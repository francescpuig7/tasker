/**
 * Created by puig on 28/4/16.
 */
define(['backbone'],
    function(Backbone){
        var mDashboard= Backbone.Model.extend({
            urlRoot: "api/dashboard"
        });
        return mDashboard;
    });