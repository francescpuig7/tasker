/**
 * Created by puig on 28/4/16.
 */
define([
    'global',
    'api'
], function (G, Api) {

    var Dashboard = {}

    Dashboard.init =  function (P) {

        G.on('view:dashboard:create', function(){
            $('#buttonOpenDashboard').click(function(){
                var $root= $(this).closest("#contingutPissarra"); //busco dins el div amb id contingutpissarra
                var li= $("<li class='list-group-item'><span/><img src='http://www.cleanfill.net/themes/green/images/news_img_delete.gif' id='polcalla'/><div class='row-fluid'/></li>"); //li sera el que crearem que li farem l'appendTo

                li.find("span").text($root.find('input').val());
                li.find('#polcalla').click(function(){
                    $(this).closest('li').remove();
                })
                li.appendTo($root.find("#openTask"));
                li.draggable({
                    revert: true
                });

            });
        })

    }

    return Dashboard

})