/**
 * Created by puig on 14/6/16.
 */
define([
    'backbone',
    'models/m_user'
], function(Backbone, UserModel){
    var UserCollection = Backbone.Collection.extend({
        model : UserModel,
        url: "/api/users"
    });
    return UserCollection;
});