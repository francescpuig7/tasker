define([
    '../global',
    'jquery',
    'collections/c_orders',
    'views/user/login',
    'views/user/signup',
    'views/header',
    'views/order/vl_orders',
    'views/dashboard/vl_dashboard',
    'views/task/vl_tasks',
    'views/user/profile',
    'views/manual/vl_howto',
    'collections/c_tasks'],
  function (G, $, CollectionOrder, UserLogin, UserSignup, HeaderView, OrdersView, Dashboard, TaskView, Profile, HowTo, CollectionTask) {

    var Ui = {}

    // Views that can be rendered at #content
    var loginView = new UserLogin()
    var signupView = new UserSignup()

    var orderList = new CollectionOrder()
    var ordersView = new OrdersView({collection: orderList}) //enllaça la vista amb la collection anterior

      var taskList = new CollectionTask()
      var dashboardView = new Dashboard({collection:taskList}) //INITIALIZE DE LA VISTA
      //var dashboardView = new Dashboard() //INITIALIZE DE LA VISTA

    var taskView = new TaskView()
    var profileView = new Profile()
    var howtoView = new HowTo()

    var $content = $('#content')

    var headerView = new HeaderView({el: '#header'})

    Ui.switchContent = function(widget) {
      var args = Array.prototype.slice.call(arguments)
      args.shift()
      switch (widget) {
        case 'login': {
          $content.html(loginView.render.apply(loginView, args).el)
          loginView.delegateEvents()
          break
        }
        case 'signup': {
          $content.html(signupView.render.apply(signupView, args).el)
          signupView.delegateEvents()
          break
        }
        case 'orders': {
          orderList.fetch({
            success: function() {
              $content.html(ordersView.render.apply(ordersView, args).el)
              ordersView.delegateEvents()
            },
            error: Ui.error
          });
          break
        }
        case 'dashboard': {
            taskList.fetch({
                success:function(){
                    $content.html(dashboardView.render.apply(dashboardView, args).el)
                    dashboardView.delegateEvents()
                },
                error: Ui.error
            });
            /*$content.html(dashboardView.render.apply(dashboardView, args).el)
            dashboardView.delegateEvents()*/
            break
        }
       /* case 'tasks':{
            $content.html(taskView.render.apply(taskView, args).el)
            taskView.delegateEvents()
            break
        }*/
        case 'profile':{
            $content.html(profileView.render.apply(profileView, args).el)
            profileView.delegateEvents()
            break
        }
        case 'howto':{
            $content.html(howtoView.render.apply(howtoView, args).el)
            howtoView.delegateEvents()
            break
        }
      }
    }

    Ui.init = function () {
      headerView.setUserData(G.localStorage.getItem('user'))
      Ui.showHome();
    }

    Ui.showHome = function () {
      if (G.localStorage.hasItem('user')) {
        Ui.switchContent('orders') //si l'usuari esta logejat
      } else {
        Ui.switchContent('login') //si l'usuari no esta logejat
      }
    }

    Ui.showSignup = function () {
      Ui.switchContent('signup')
    }

    Ui.showOrders = function () {
      orderList.fetch({
        success: Ui.switchContent.bind(Ui, 'orders'),
        error: Ui.error
      });
    }

    Ui.showTasks = function (){
        taskList.fetch({
            success: Ui.switchContent.bind(Ui, 'dashboard'),
            error: Ui.error
        });
    }

    Ui.errorBackbone  = function (data, res) {
      alert("Error: " + res.responseJSON.error.message)
    }

    // This always receive a JSON object with a standard API error
    Ui.error = function (err) {
      alert("Error: " + err.message)
    }

    // This always receive a jQuery error object from an API call
    Ui.errorAPI = function (res) {
      alert("Error: " + res.responseJSON.error.message)
    }

    G.on('presenter:switch-ui:home', Ui.showHome)

    return Ui
  })
