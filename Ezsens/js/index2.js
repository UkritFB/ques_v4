angular.module('MyApp',['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
.controller('SelectAsyncController', function($timeout, $scope) {
  $scope.user = null;
  $scope.users = null;

  $scope.loadUsers = function() {

    // Use timeout to simulate a 650ms request.
    return $timeout(function() {

      $scope.users =  $scope.users  || [
        { id: 1, name: 'กลิ่นสารเคมี' },
        { id: 2, name: 'กลิ่นอาหาร' },
        { id: 3, name: 'กลินมลภาวะ' },
        { id: 4, name: 'กลิ่นจากโรงงาน' },
        { id: 5, name: 'กลิ่นดอกไม้' }
      ];

    }, 650);
  };
});

angular.module1('MyApp',['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])

.controller('AppCtrl', function($scope) 
{
  $scope.title1 = 'Button';
  $scope.title4 = 'Warn';
  $scope.isDisabled = true;

  $scope.googleUrl = 'http://google.com';

});
/**
Copyright 2016 Google Inc. All Rights Reserved. 
Use of this source code is governed by an MIT-style license that can be foundin the LICENSE file at http://material.angularjs.org/HEAD/license.
**/