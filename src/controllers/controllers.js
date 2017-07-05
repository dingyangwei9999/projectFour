var indexApp = angular.module('indexApp', ['globalapp','ui.router','supplier','purchase']);
indexApp.config(function ($stateProvider, $urlRouterProvider) {
$stateProvider
 	.state("/supplier", {
     url: "/supplier",//当 url 为#/pagetab
     templateUrl: "supplier.html?_" + Math.random(),
     controller: 'supplier'
	})
	.state("/purchase", {
     url: "/purchase",
     templateUrl: "purchase.html?_" + Math.random(),
     controller: 'purchase'
	})
});
indexApp.controller('indexController', ['$scope', '$http', function($scope, $http){
    // 此处可发起ajax请求或读取本地存储，将不同板块写入
    $scope.features = {
        totalFeatures: '商品',
        childFeatures: '商品分类',
        name:'bjjbjj',
        shopName:'tan90'
    }
    $scope.account={
        name:'bjjbjj',
        shopName:'tan90'
    }
}])