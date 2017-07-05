var mainApp = angular.module('mainApp',['globalapp']);
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
    alert('你的商品上架成功!!!!')
    this.outbound = false;
    }
    $scope.oubound = function(){
    alert('你的商品已回到库存')
    this.outbound = true;
    }

    $scope.add = function(){
    alert('请期待下一个版本~~~')
    }

    $scope.productID;
     //隐藏和显示编辑框
    $scope.change = function($index){
        $scope.myChange = true;
        return $scope.productID = $scope.dataset[$index].productID;
        
     } 
    $scope.hideing = function(){
        $scope.myChange = false;
    }
    
    //删除
    $scope.delete = function($index){
        
        $scope.productID = $scope.dataset[$index].productID;
        var PID = {"productID":$scope.productID}
        $http({method:"POST",url:baseUrl+'delbound',data:PID}).success(function(res){
            console.log(666)
        })
        alert('删除')
        window.location.reload();
    }




    //修改
    $scope.oright = function(){
        if(!$scope.inboundID){
           alert('请输入单号');
            return false;
        }
        if(!$scope.reserveNum){
           alert('请输入实际数量');
            return false;
        }
        if(!$scope.inbounds){
           alert('请输入入库数量');
            return false;
        }
        if(!$scope.inboundTime){
           alert('请输入入库时间');
            return false;
        }
        if(!$scope.outbounds){
           alert('请输入出库时间');
            return false;
        }
        if(!$scope.outboundTime){
           alert('请输入出库时间');
            return false;
        }
        var obbj = {
                    "productID":$scope.productID,
                    "inboundID":$scope.inboundID,
                    "reserveNum":$scope.reserveNum,
                    "inbounds":$scope.inbounds,
                    "inboundTime":$scope.inboundTime,
                    "outbounds":$scope.outbounds,
                    "outboundTime":$scope.outboundTime,
                    "writedown":$scope.writedown
                    }
        $http({method:"POST",url:baseUrl+'changebound',data:obbj}).success(function(res){
            console.log(666)
        })
        alert('编辑成功')
        window.location.reload();
    }





   //搜索
    $scope.search = function(){
        console.log(666)
         var _dataset = [];
            for(var index in $scope.datasetorigin){
                var obj = $scope.datasetorigin[index];
                var _result = (
                    (!$scope.inboundID || obj.inboundID.indexOf($scope.inboundID) > -1)
                    && (!$scope.qrCode || obj.qrCode.indexOf($scope.qrCode) > -1)
                    && (!$scope.otboundID || obj.outboundID.indexOf($scope.otboundID) > -1)
                    && (!$scope.productName || obj.productName.indexOf($scope.productName) > -1)
                    && (!$scope.productID || obj.productID.indexOf($scope.productID) > -1)
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