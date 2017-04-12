namespace bm {
  angular.module("bm",["ui.router"])
    .controller("emojiList", ["$stateParams", "$scope", function($stateParams, $scope){
      console.log($stateParams)
      $scope.bm = $stateParams.bm
    }])
    .controller("emojiDetails", ["$stateParams", "$scope", function($stateParams, $scope){
      console.log($stateParams)
      $scope.bm = $stateParams.bm
    }])

    .config([
      "$locationProvider",
      "$urlRouterProvider",
      "$stateProvider",
      (
        $locationProvider:ng.ILocationProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $stateProvider: ng.ui.IStateProvider
      ) => {
        $stateProvider
          .state("emojiList", {
            url: "/",
            templateUrl: "app/views/emojiList.html",
            controller: bm.controllers.EmojiList,
            controllerAs: "vm"
          })
          .state("emojiDetails", {
            url: "/details/:id",
            templateUrl: "app/views/emojiDetails.html",
            controller: bm.controllers.EmojiDetails,
            controllerAs: "vm",
            params: {emoji: null}
          });
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/')
      }]
    );
}
