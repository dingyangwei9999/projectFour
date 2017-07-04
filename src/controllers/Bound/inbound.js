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
    //页面加载的时候请求数据
    $http.post(baseUrl+'inbound').success(function(res){
        var attr = res;
        $scope.dataset = attr;
        $scope.datasetorigin = attr;
        })
    
    //入库
    $scope.outbound = true;
    $scope.inbound = function(){
    this.outbound = false;
    }
    $scope.oubound = function(){
    this.outbound = true;
    }


    
     //隐藏和显示编辑框
     $scope.change = function(){
        $scope.myChange = true;
        
     } 
               
    $scope.hideing = function(){
        $scope.myChange = false;
    }
   //搜索
    $scope.search = function(){
        // productId = $scope.productId;
        // inboundId = $scope.inboundId;
        // outboundId = $scope.inboundId;
        console.log(666)
         var _dataset = [];
            for(var index in $scope.datasetorigin){
                var obj = $scope.datasetorigin[index];
                var _result = (
                    (!$scope.inboundID || obj.inboundID.indexOf($scope.inboundID) > -1)
                    && (!$scope.qrCode || obj.qrCode.indexOf($scope.qrCode) > -1)
                    && (!$scope.outboundID || obj.outboundID.indexOf($scope.outboundID) > -1)
                );
                if(_result){
                    _dataset.push(obj);
                }
            }
            $scope.dataset = _dataset;
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