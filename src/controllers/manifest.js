

var manifesrApp = angular.module('manifesrApp', []);
productStoreApp.factory('openProductStore', function () {
    return {
         account:{
                _id:'',
                name:'',
                code:'',
                classify:'',
                supplier:'',
                unit:'',
                upper:'',
                floor:'',
                data:'',
                guarantee:''
            },
            //显示隐藏货单
            
            toggle:function(){
                if($scope.visible){
                    $scope.visible = false
                    console.log(111);       
                }else{
                    $scope.visible=true;
                    console.log(222)
                }
            console.log($scope.visible)

            },

            submit:function(){
                $http({
                    method:'POST',
                    data:{
                        startDate:timestamp1,
                        endDate:timestamp2,
                        pageStart:pageStart,
                        pageSize:pageSize
                    },
                    params:{
                        appId:$scope.appIdInput,
                        userId:'11345973',
                        methodName:'searchUserInfoByTime'
                    },
                    url:"newDEyesPostProxy"
                })
                    .success(function (response) {
                        $scope.lists = response.userList;
                        if(response.userList.length == pageSize){
                            $scope.isMore = true;
                        }else{
                            $scope.isMore = false;
                        }
                        if(pageStart == 0){
                            $scope.notFirst = false;
                        }else{
                            $scope.notFirst = true;
                        }
                })
            }
    }
})


       