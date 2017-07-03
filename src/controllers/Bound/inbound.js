var mainApp = angular.module('mainApp',[]);
mainApp.value('lan', function(){
    var lan = window.localStorage.getItem("lan");
    if(!lan){
        lan = "cn";
    }
    window.localStorage.setItem("lan", lan);
    return lan;
    })
mainApp.controller('studentController',['$scope','$http','lan',function($scope,$http,lan){
    
    
    var attr = [{productId:'123',qrCode:'54654645632',productName:'蛮牛MAX COOL无糖口香糖（蜂蜜薄荷）',
        purchasingCost:'5.5',salePrice:'8.8',Unit:'2',category:'3',supplier: '2',
        }]
     $scope.dataset = attr;
                
    
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