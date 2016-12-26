(function() {
    'use strict';
    angular.module('insta').controller('LoginCtrl', LoginCtrl);

    LoginCtrl.inject = ['$scope', '$rootScope', '$location'];

    function LoginCtrl($scope, $rootScope, $location) {
        var vm = this;

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
