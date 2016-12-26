(function(){
  'use strict';

  angular.module('insta').run(function($rootScope, $location){
    $rootScope.user = null;
    $rootScope.$on('$routeChangeStart', function (event, next, current) {
      if($rootScope.user == null){
        $location.path("/login");
      }
    });
  });

})();
