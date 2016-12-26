(function() {
    'use strict';
    angular.module('insta').controller('LoginCtrl', LoginCtrl);

    LoginCtrl.inject = ['$scope', '$rootScope', '$location', 'APP_SETTINGS'];

    function LoginCtrl($scope, $rootScope, $location, APP_SETTINGS) {
        var vm = this;
        var ref = new Firebase(APP_SETTINGS.FIREBASE_URL);

        vm.login = login;
        vm.logout = logout;

        function login(usuario) {
            $rootScope.user = {
                user: usuario.nome,
                email: usuario.email
            };
            $location.path('/');
        }

        function logout() {
            $rootScope.user = null;
            $location.path('/login');
        }
    }
})();
