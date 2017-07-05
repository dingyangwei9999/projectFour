
var indexApp = angular.module('indexApp', ['ui.router','globalapp']);
indexApp.value('baseUrl','http://10.3.50.71:888/');
    //声明了把 $stateProvider 和 $urlRouteProvider 路由引擎作为函数参数传入，这样我们就可以为这个应用程序配置路由了.
indexApp.config(function ($stateProvider, $urlRouterProvider) {
        //如果没有路由引擎能匹配当前的导航状态，那它就会默认将路径路由至 index.html, 这个页面就是状态名称被声明的地方. 只要理解了这个，那它就像switch case语句中的default选项.
        //$urlRouterProvider.when("", "/index/:id");
        //定义了会在main.html页面第一个显示出来的状态，作为页面被加载好以后第一个被使用的路由.
        //这就向母版页的子页面，应用程序会首先加载这个main.html页面。
        $stateProvider
           .state("/grounding", {
               url: "/grounding",
               templateUrl: "grounding.html",
               controller: 'groundController'
           })

           .state("/personnel", {
               url: "/personnel",
               templateUrl: "personnel.html",
               controller: 'personnelController'
           })
});


indexApp.controller('groundController', ['$scope','$http','baseUrl',function($scope,$http,baseUrl){
        $scope.msg = {
            isGround:'已上架',
        }

        $scope.checkBtn = function(){ 
            $http({
                methods:'get',
                url: baseUrl + 'getpersonnel',
            }).then(function(res){
                console.log('res->',res)
            }); 
        }

}]);

indexApp.controller('personnelController', ['$scope','$http','baseUrl',function($scope,$http,baseUrl){
        $scope.used = {
            isStart:'启用',
        }

        $scope.checkBtn = function(){ 
            $http({
                methods:'get',
                params:{},
                url: baseUrl + 'getpersonnel',
            }).then(function(res){
                $scope.dataset = res.data;
                console.log('res->',res,'dataset->',$scope.dataset[0]);

            }); 
        }

}]);




indexApp.controller('indexController', ['$scope', '$http', function($scope, $http){
        // 此处可发起ajax请求或读取本地存储，将不同板块写入
        $scope.features = {
            totalFeatures: '商品',
            childFeatures: '商品分类',
            name:'bjjbjj',
            shopName:'tan90'
        }
        
        $scope.account = {
            name: window.localStorage.getItem( 'user' ) || 'bjjbjj',
            shopName: window.localStorage.getItem( 'store' ) || 'tan90'
        }

        $scope.indexLoginButton = function(){
            window.localStorage.removeItem( 'user' );
            window.localStorage.removeItem( 'store' );
            window.location = '/templates/login.html';

        }


}])
