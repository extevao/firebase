(function() {
    'use strict';
    angular.module('insta').controller('HomeCtrl', HomeCtrl);

    HomeCtrl.inject = ['$scope', '$firebaseArray'];

    function HomeCtrl($scope, $firebaseArray) {
        var vm = this;
        // var url = APP_SETTINGS.FIREBASE_URL + 'posts';
        var ref = firebase.database().ref('/posts');
        ref.orderByKey().limitToLast(25);
        vm.posts = [];
        activate();

        function activate() {
            vm.posts = $firebaseArray(ref);
        }

    }
})();
