var mainApp = angular.module('mainApp',[]);
mainApp.value('lan', function(){
    var lan = window.localStorage.getItem("lan");
    if(!lan){
        lan = "cn";
    }
    window.localStorage.setItem("lan", lan);
    return lan;
})
mainApp.value('baseUrl','http://localhost:888/')
mainApp.controller('inBound',['$scope','$http','lan','baseUrl',function($scope,$http,lan,baseUrl){
    
    
    var attr = [{productId:'123',qrCode:'54654645632',productName:'蛮牛MAX COOL无糖口香糖（蜂蜜薄荷）',
        purchasingCost:'5.5',salePrice:'8.8',Unit:'2',category:'3',supplier: '2',
        },{productId:'123',qrCode:'54654645632',productName:'蛮牛MAX COOL无糖口香糖（蜂蜜薄荷）',
        purchasingCost:'5.5',salePrice:'8.8',Unit:'2',category:'3',supplier: '2',
    }]
    
     $scope.dataset = attr;
     $scope.change = function(){
        $scope.myChange = true;
        
     }           
    $scope.hideing = function(){
        $scope.myChange = false;
    }
    $scope.test = function(){
        $http.post(baseUrl+'inbound').success(function(res){
            console.log(res)
        })
    }
    
    // $scope.lan = lan();
    // $scope.cols = attr.columns ? attr.columns.split(',') : [];

    

}])






// var commonApp = angular.module('commonApp', []);

// commonApp.value('baseUrl', 'http://192.168.1.75/course/api/api/')

// commonApp.value('lan', function(){
//     var lan = window.localStorage.getItem("lan");
//     if(!lan){
//         lan = "cn";
//     }
//     window.localStorage.setItem("lan", lan);
//     return lan;
// })

// commonApp.directive('datagrid', ['$http', 'baseUrl', 'lan', function($http, baseUrl, lan){
//     return {
//         restrict: 'E',
//         templateUrl: 'datagrid.html',
//         replace: true,
//         link: function(scope, elment, attr){
//             scope.dataset = [];
//             console.log(2, scope)
            
           

//             scope.lan = lan();
//             scope.cols = attr.columns ? attr.columns.split(',') : [];

//             scope.myFilter = function(data){
//                 return data;
//                 // return searchFactory.search(data, $scope.username)
//             }
//         }
//     }
// }])