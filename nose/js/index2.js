angular.module('MyApp',['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
.controller('SelectAsyncController', function($timeout, $scope) {
                $scope.user = null;
                $scope.users = null;
                $scope.loadUsers = function() {

                // Use timeout to simulate a 650ms request.
                return $timeout(function() {
                            $scope.users =  $scope.users  || [
                                                { id: 1, name: 'กลิ่นฉุนแสบจมูก' },
                                                { id: 2, name: 'กลิ่นแอมโมเนีย' },
                                                { id: 3, name: 'กลิ่นปลาเน่า,เนื้อเน่า' },
                                                { id: 4, name: 'กลิ่นล้ายน้ำมันเบนซิน' },
                                                { id: 5, name: 'กลิ่นน้ำยาฟอกขาว' },
                                                { id: 6, name: 'กลิ่นคล้ายเนย' },
                                                { id: 7, name: 'กลิ่นการบูร' },
                                                { id: 8, name: 'กลิ่นน้ำยาดองศพ' },
                                                { id: 9, name: 'กลิ่นเหม็นชวนสำลัก' }];
                                            }, 50);
                    };  
});

/**
Copyright 2016 Google Inc. All Rights Reserved. 
Use of this source code is governed by an MIT-style license that can be foundin the LICENSE file at http://material.angularjs.org/HEAD/license.
**/