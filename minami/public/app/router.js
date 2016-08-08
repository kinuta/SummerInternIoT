minamiApp.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/main");
  //
  // Now set up the states
  $stateProvider
    .state('main', {
      url: "/main",
      templateUrl: "view/main.html"
    })
    .state('howtouse', {
      url: "/howtouse",
      templateUrl: "view/howtouse.html"
    })
    .state('wana', {
      url: "/wana",
      templateUrl: "view/wana.html"
    })
    .state('hatake', {
      url: "/hatake",
      templateUrl: "view/hatake.html"
    })
});