(function() {
  'use strict'

  angular.module('app') //references module
    .config(pickles)

  pickles.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

  function pickles($stateProvider, $urlRouterProvider, $locationProvider){
    $locationProvider.html5Mode(true) //clean URLs no #. Need for base '/' state

    $stateProvider
      .state({
        name: 'app',
        abstract: true,
        component: 'app',
      })
      .state({
        name: 'home',
        parent: 'app',
        url: '/',
        component: 'messagesList',
      })
      .state({
       name: 'message-detail',
       parent: 'app',
       url: '/:id',
       component: 'messageDetail',
     })
  }

}());
