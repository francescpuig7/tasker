define([
  'global',
  'api'
], function (G, Api) {

  var Orders = {}

  Orders.init =  function (P) {

      G.on('view:orders:create', function(){
          //obtenim el botó i programem l'event al fer click
          $("#buttonCreate").click(function() {
              // $root es la classe root
              //li sera la llista que genera el function onclick
              var $root = $(this).closest(".root");
              var li = $("<li class='list-group-item'><span/><div class='row-fluid'/></li>");
              li.find("span").text($root.find("input").val()); //busquem a la classe root l'input
              li.find('img').click(function() {
                  $(this).closest('li').remove();
              });
              li.appendTo($root.find(".list"));
              li.draggable({
                  revert: true
              });
          });
      })

    }

  return Orders

})