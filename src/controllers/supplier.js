var supplier = angular.module('supplier',['globalapp']);
supplier.value('baseUrl','http://localhost:888/')
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

supplier.controller('supplier',['$scope', '$http', 'baseUrl' ,function ($scope, $http,baseUrl) {

	$http({
	    	methods:'get',
	    	url:baseUrl+'getsupplier',
	    }).then(function(res){
	    	// console.log(res.data)
	    	 $scope.dataset = res.data
	    });


    $scope.show=function(){
    	// console.log(234)
    	// console.log($scope.Financial_show)
		$scope.Financial_show=!$scope.Financial_show;
	}
    $scope.quxiao=function(){
		// console.log(234)
		// console.log($scope.Financial_show)
		$scope.edit_show=!$scope.edit_show;
	}
	$scope.edit=function($index,event){
		$scope.a=event.target.parentNode.nextSibling.nextSibling.nextSibling.nextSibling.innerHTML
		console.log($scope.a)
		$scope.numval=$scope.dataset[$index].ID;
		$scope.nameval1=$scope.dataset[$index].supplierName;
		$scope.indexid = $scope.dataset[$index].indexid;
		$scope.edit_show=!$scope.edit_show;
	}
	$scope.suiji=function(){
		console.log()
		$scope.val=parseInt(Math.random()*10000000);
	}
	$scope.keep=function(){
		var indexid = 12;
		var ID = $scope.val;
		var supplierName = $scope.nameval;
		$scope.Financial_show=!$scope.Financial_show;
	    var obj={"ID":$scope.val,"supplierName":$scope.nameval}
	    // console.log(obj)
	    $http({
	    	methods:'get',
	    	url:baseUrl+'addsupplier',
	    	params:obj
	    }).then(function(res){
	    	console.log(res)
	    	if(res.data){
	    		$scope.message='添加成功！'
	    		var data={indexid,ID,supplierName};
				// console.log(ID,supplierName)
				// console.log(data)
				$scope.dataset=$scope.dataset.concat(data);
				console.log($scope.dataset)
	    		$scope.closeTips=true;
	    	}else{
	    		$scope.message='添加失败！'
	    		$scope.closeTips=true;
	    	}
	    });
	    $scope.val='';
	    $scope.nameval='';
	    // $http.post(baseUrl+'add',obj).success(function(response){
    	// console.log(response)
     //    // $scope.dataset = response.data;
   		// })
	}
	$scope.keepedit=function(event){

		var obj = {"ID":$scope.numval,"supplierName":$scope.nameval1,"indexid":$scope.indexid}
		// console.log(obj)
		$http({
	    	methods:'get',
	    	url:baseUrl+'editsupplier',
		    params:obj
		    }).then(function(res){
		    	// console.log(res)
		    if(res.data){
	    		$scope.message='修改成功！'
	    		$scope.closeTips=true;
	    		var data=[];
				$scope.dataset.forEach(function(item,index){
					$scope.indexid=$scope.dataset[index].ID;
					// console.log($scope.indexid)
					// console.log($scope.a,$scope.indexid)
					if($scope.a==$scope.indexid){
						item.ID = $scope.numval;
						item.supplierName = $scope.nameval1;
						// console.log(item.ID,$scope.numval)
					}
					data.push(item)
				});
				// console.log(data)
				$scope.dataset=data;
	    	}else{
	    		$scope.message='修改失败！'
	    		$scope.closeTips=true;
	    	}
		});
		
		$scope.edit_show=!$scope.edit_show;

	}
	$scope.del=function($index){
		// console.log($scope.dataset[$index].indexid)
		$scope.indexid=$scope.dataset[$index].indexid;
		var obj = {"indexid":$scope.indexid}
		console.log(obj)
		$http({
	    	methods:'get',
	    	url:baseUrl+'delsupplier',
		    params:obj
		    }).then(function(res){
		    	console.log(res)
		    if(res.data){
	    		$scope.message='删除成功！'
	    		$scope.closeTips=true;
	    		$scope.dataset.splice($index,1)
				$scope.dataset = $scope.dataset;
	    	}else{
	    		$scope.message='删除失败！'
	    		$scope.closeTips=true;
	    	}
		});
		    $scope.closeTips=true;
		
	}
	$scope.closeTip=function(){
		// $scope.closeTips=true;
		$scope.closeTips=!$scope.closeTips;

	}
            
}])