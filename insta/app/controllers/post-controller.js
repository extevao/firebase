(function() {
    'use strict';
    angular.module('insta').controller('PostCtrl', PostCtrl);

    PostCtrl.inject = ['$scope', '$rootScope', '$location'];

    function PostCtrl($scope, $rootScope, $location) {
        var vm = this;
        var ref = firebase.database().ref('/posts');


        vm.filters = ['original', 'grayscale', 'brightness', 'contrast', 'saturate', 'invert', 'sepia'];
        vm.image = '';
        vm.croppedImage = '';
        vm.message = '';

        vm.post = post;

        function post(filter) {

            var data = {
                photo: vm.croppedImage,
                filter: filter,
                message: vm.message,
                user: $rootScope.user
            };
            console.log(data);

            ref.push(data);

            vm.image = '';
            vm.croppedImage = '';
            vm.message = '';
            $location.path('/');
        }

        var handleFileSelect = function(evt) {
            var file = evt.currentTarget.files[0];
            var reader = new FileReader();
            reader.onload = function(evt) {
                $scope.$apply(function($scope) {
                    vm.image = evt.target.result;
                });
            };
            reader.readAsDataURL(file);
        };
        angular.element(document.querySelector('#file')).on('change', handleFileSelect);



    }
})();
