minamiApp.config(config);

function config($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/main");
  //
  // Now set up the states
  $stateProvider
    .state('index', {
      templateUrl: "view/index.html",
      controller: 'indexController',
      controllerAs: 'vm'
    })
    .state('index.main', {
      url: "/main",
      templateUrl: "view/main.html"
    })
    .state('index.howtouse', {
      url: "/howtouse",
      templateUrl: "view/howtouse.html"
    })
    .state('index.wana', {
      url: "/wana",
      templateUrl: "view/wana.html"
    })
    .state('index.hatake', {
      url: "/hatake",
      templateUrl: "view/hatake.html"
    })
}