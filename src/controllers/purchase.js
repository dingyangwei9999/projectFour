var purchase = angular.module('purchase',[]);
purchase.value('baseUrl','http://localhost:888/')
//查询
function filter(array, expression, comparator) {
    //case1： expression => string
    var html = '';
    for (var i = 0; i < array.length; i++) {
        if (typeof expression == 'string') {
            //index => 0: array[i] = > {{name:'Tom', age:20}}
            for (var key in array[i]) {
                //key => name
                //index => 0: array[i][key] => Tom
                if (array[i][key].toString().indexOf(expression) > -1) {
                    html += '<div>' + array[i].name + '</div>';
                }
            }
        } else if (typeof expression == 'object') {
            //...
        }
        if (typeof comparator == 'function') {
            comparator();
        }
    }
    console.log(html);
};

purchase.controller('purchase',['$scope', '$http', 'baseUrl' ,function ($scope, $http,baseUrl) {
	//获取所有采购单
	$http({
    	methods:'get',
    	url:baseUrl+'getpurchase',
    }).then(function(res){
    	// console.log(res.data)
    	 $scope.dataset = res.data
    });
    //获取所有类别
    $http({
    	methods:'get',
    	url:baseUrl+'getcategory',
    }).then(function(res){
    	// console.log(res.data)
    	 $scope.category = res.data
    });
     //获取所有供应商
    $http({
	    	methods:'get',
	    	url:baseUrl+'getsupplier',
	    }).then(function(res){
	    	// console.log(res.data)
	    	 $scope.supplier = res.data
	    });

	var now=new Date() 
	$scope.times=1900+now.getYear()+"-"+(now.getMonth()+1)+"-"+now.getDate()

	// console.log($scope.times)
    $scope.show=function(){
		$scope.Financial_show=!$scope.Financial_show;
	}
	$scope.edit=function($index){
    	// console.log(234)
    	$scope.bianhao1=$scope.dataset[$index].ID;
		$scope.tiaoma1=$scope.dataset[$index].qrCode;
		$scope.mingcheng1 = $scope.dataset[$index].productName;
		$scope.zhonglei1 = $scope.dataset[$index].category;
		console.log($scope.zhonglei1)
		$scope.danjia1 = $scope.dataset[$index].price;
		$scope.shuliang1 = $scope.dataset[$index].qty;
		$scope.gongming1 = $scope.dataset[$index].supplierName;
		$scope.edit_show=!$scope.edit_show;
		$scope.indexid = $scope.dataset[$index].indexid;
	}
	$scope.suiji=function(){
		console.log()
		$scope.bianhao=parseInt(Math.random()*10000000000);
		$scope.bianhao1=parseInt(Math.random()*10000000000);
	}
	$scope.keep=function(){
		$scope.zongjia = $scope.danjia*$scope.shuliang;
		console.log($scope.danjia,$scope.shuliang,$scope.zongjia)
	    var obj={
	    		"ID":$scope.bianhao,
	    		"qrCode":$scope.tiaoma,
	    		"productName":$scope.mingcheng,
	    		"category":$scope.zhonglei,
	    		"price":$scope.danjia,
	    		"qty":$scope.shuliang,
	    		"totalPrice":$scope.zongjia,
	    		"supplierName":$scope.gongming,
	    		"times":$scope.times
	    	}
	    console.log(obj)
	    $http({
	    	methods:'get',
	    	url:baseUrl+'addpurchase',
	    	params:obj
	    }).then(function(res){
	    	console.log(res)
	    	if(res.data){
	    		$scope.message='添加成功！'
				$http({
			    	methods:'get',
			    	url:baseUrl+'getpurchase',
			    }).then(function(res){
			    	// console.log(res.data)
			    	 $scope.dataset = res.data
			    });
	    		$scope.closeTips=true;
	    	}else{
	    		$scope.message='添加失败！'
	    		$scope.closeTips=true;
	    	}
	    });
	   	$scope.bianhao='';
	    $scope.tiaoma='';
	    $scope.mingcheng='';
	    $scope.zhonglei='';
	    $scope.danjia='';
	    $scope.shuliang='';
	    $scope.gongming='';
		$scope.Financial_show=!$scope.Financial_show;
	}
	$scope.keepedit=function(){
		$scope.zongjia = $scope.danjia*$scope.shuliang;
		var obj={
	    		"ID":$scope.bianhao1,
	    		"qrCode":$scope.tiaoma1,
	    		"productName":$scope.mingcheng1,
	    		"category":$scope.zhonglei1,
	    		"price":$scope.danjia1,
	    		"qty":$scope.shuliang1,
	    		"totalPrice":$scope.zongjia,
	    		"supplierName":$scope.gongming1,
	    		"times":$scope.times,
	    		"indexid":$scope.indexid
	    	}
		// console.log(obj)
		$http({
	    	methods:'get',
	    	url:baseUrl+'editpurchase',
		    params:obj
		    }).then(function(res){
		    	console.log(res)
		    if(res.data){
	    		$scope.message='修改成功！'
	    		$scope.closeTips=true;
				$http({
			    	methods:'get',
			    	url:baseUrl+'getpurchase',
			    }).then(function(res){
			    	console.log(res.data)
			    	 $scope.dataset = res.data
			    });				
	    	}else{
	    		$scope.message='修改失败！'
	    		$scope.closeTips=true;
	    	}
		});

		$scope.edit_show=!$scope.edit_show;
	}
	$scope.closeTip=function(){
		// $scope.closeTips=true;
		$scope.closeTips=!$scope.closeTips;

	}
	$scope.quxiao=function(){
		// $scope.closeTips=true;
		$scope.edit_show=!$scope.edit_show;

	}

	$scope.del=function($index){
		// console.log($scope.dataset[$index].indexid)
		$scope.indexid=$scope.dataset[$index].indexid;
		var obj = {"indexid":$scope.indexid}
		console.log(obj)
		$http({
	    	methods:'get',
	    	url:baseUrl+'delpurchase',
		    params:obj
		    }).then(function(res){
		    	console.log(res)
		    if(res.data){
	    		$scope.message='删除成功！'
	    		$scope.closeTips=true;
	    		$http({
			    	methods:'get',
			    	url:baseUrl+'getpurchase',
			    }).then(function(res){
			    	console.log(res.data)
			    	 $scope.dataset = res.data
			    });
	    	}else{
	    		$scope.message='删除失败！'
	    		$scope.closeTips=true;
	    	}
		});
		    $scope.closeTips=true;
		
	}
            
}])