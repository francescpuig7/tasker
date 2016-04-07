define(['jquery', 'promises'], function ($, P) {
  var Api = {};

  Api.login = function (data) {
    return new P(function(resolve, reject) {
      $.ajax({
        url: '/api/users/login',
        dataType: 'json',
        type: 'post',
        contentType: 'application/json',
        data: JSON.stringify(data),
        processData: false,
        success: resolve,
        error: reject
      });
    })
  };

  Api.signup = function (data) {
    return new P(function (resolve, reject) {
      $.ajax({
        url: '/api/users',
        dataType: 'json',
        type: 'post',
        contentType: 'application/json',
        data: JSON.stringify(data),
        processData: false,
        success: resolve,
        error: reject
      });
    });
  };

  Api.getOrders = function () {
    return new P(function (resolve, reject) {
      var user = Backbone.localStorage.getItem('user');
      if (!user) {
        return reject(new Error("API call needs user authenticated"))
      }
      var token = user.jwt;
      $.ajax({
        url: '/api/users/self/orders',
        dataType: 'json',
        type: 'get',
        contentType: 'application/json',
        processData: false,
        beforeSend: function (xhr) {
          xhr.setRequestHeader("Authorization", "Bearer " + token);
        },
        success: resolve,
        error: reject
      });
    });
  };

  return Api;
});
