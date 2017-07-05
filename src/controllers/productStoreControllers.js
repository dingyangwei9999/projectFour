var productStoreApp = angular.module('productStoreApp', []);


//打开新增商品界面
productStoreApp.factory('openProductStoreBjj', function () {
    // console.log(122)
    return {
        openAddProduct:function(num){
            if(num=="-500px"){
                num = 0;
            }else{
                num="-500px";
            }
            return num;
        }
    }
});
//关闭新增商品界面
productStoreApp.factory('delAddProducts', function () {
    return {
        
        delAddProducts:function(num){
                num="-500px"
            return num;
        }
    }
});



//打开新增单位界面
productStoreApp.factory('openAddUnit', function () {
    return {
        
        openAddUnit:function(num){
            if(num=="-500px"){
                num = 0;
            }else{
                num="-500px";
            }
            return num;
        }
    }
});
//关闭新增单位界面
productStoreApp.factory('closeAddUnit', function () {
    return {
        
        closeAddUnit:function(num){
                num="-500px"
            return num;
        }
    }
});




//打开新增商品类型界面
productStoreApp.factory('openCategory', function () {
    return {
        
        openCategory:function(num){
            if(num=="-500px"){
                num = 0;
            }else{
                num="-500px";
            }
            return num;
        }
    }
});
//关闭新增商品类型界面
productStoreApp.factory('closeCategory', function () {
    return {
        
        closeCategory:function(num){
                num="-500px"
            return num;
        }
    }
});


//页面初始，发送ajax，加载tproducts里面的数据
productStoreApp.factory('addTproducts', function () {
    return {
       
        addTproducts:function(http,callback){
            var dataTproducts = [];
            
            http.get('http://localhost:888/getTproducts').success(function(response){
                // dataTproducts =response;
                for(var i=0;i<response.length;i++){
                    var obj = {
                        productName : response[i].productName,
                        qrCode : response[i].qrCode,
                        purchasingCost : response[i].purchasingCost,
                        salePrice : response[i].salePrice,
                        storeNum : response[i].storeNum,
                        unit : response[i].unit,
                        suppliername : response[i].supplierName,
                        category : response[i].category
                    }
                    dataTproducts.push(obj);
                   
                    // var now = response[i].storageTime;
	                // var year = now.getFullYear();var month = now.getMonth()+1;//0-11
                    // var date = now.getDate();var week = now.getDay();//0-6
	                // var hour = now.getHours();var min = now.getMinutes();
                    // var sec = now.getSeconds();// 补0操作
                    // month = month<10 ? '0'+month : month;
	                // date = date<10 ? '0'+date : date;
                    // hour = hour<10 ? '0'+hour : hour;
                    // min = min<10 ? '0'+min : min;
                    // sec = sec<10 ? '0'+sec : sec;
	                // var str = year + '年' + month + '月' + date + '日 '  + hour + ':' + min + ':' + sec;
                    // dataTproducts.storageTime= str;
                }
                // console.log(dataTproducts)
                return callback(dataTproducts);
            })
            
            
        }
    }
});



//发送ajax，加载单位tunit表格
productStoreApp.factory('addTunit', function () {
    return {
        addTunit:function(http,callback){
            http.get('http://localhost:888/addTunit').success(function(response){
                return callback(response);
            })
        }
    }
});


//发送ajax，加载商品类型tcategory表格
productStoreApp.factory('addTcategory', function () {
    return {
        addTcategory:function(http,callback){
            http.get('http://localhost:888/addTcategory').success(function(response){
                return callback(response);
            })
        }
    }
});

//发送ajax，加载供应商supplier表格
productStoreApp.factory('addTsupplier', function () {
    return {
        addTsupplier:function(http,callback){
            http.get('http://localhost:888/addTsupplier').success(function(response){
                return callback(response);
            })
        }
    }
});

//点击添加商品
productStoreApp.factory('addProductContentBtn', function () {
    return {
        addProductContentBtn:function(bjscope ,bjhttp , callback){
            // console.log(bjscope.selectedName)
            var addProductContent = {};
            addProductContent.qrCode = bjscope.addProductContent.qrCode;
            addProductContent.productName = bjscope.addProductContent.productName;
            addProductContent.purchasingCost = bjscope.addProductContent.purchasingCost;
            addProductContent.salePrice = bjscope.addProductContent.salePrice;
            addProductContent.Unit =addProNameTotal.addProNameUnit.value;
            addProductContent.category = addProNameTotal.addProNameCategory.value;
            addProductContent.supplier = addProNameTotal.addProNameSupplier.value;
            addProductContent.storageTime = (new Date()).getTime();
            addProductContent.storeNum = 1;
            
            bjhttp({
                    method:"post",  
                    url: "http://localhost:888/addProductContent",
                    data: addProductContent, 
                    headers:{
                        'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
                    }
                }).success(function(response){
                    return callback(response);
                })
           
            
        }
    }
});




//点击添加单位
productStoreApp.factory('addUnitBtn', function () {
    return {
        addUnitBtn:function(bjscope ,bjhttp , callback){
            // console.log(bjscope.selectedName)
            var addUnitContent = {};
            addUnitContent.unit = bjscope.unitValue;
            bjhttp({
                    method:"post",  
                    url: "http://localhost:888/addUnitContent",
                    data: addUnitContent, 
                    headers:{
                        'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
                    }
            }).success(function(response){
                return callback(response);
            }) 
    
        }
    }
});




//点击添加商品类型
productStoreApp.factory('saveCategory', function () {
    return {
        saveCategory:function(bjscope ,bjhttp , callback){
            // console.log(bjscope.selectedName)
            var addCategoryContent = {};
            addCategoryContent.category = bjscope.categryValue;
            bjhttp({
                    method:"post",  
                    url: "http://localhost:888/saveCategory",
                    data: addCategoryContent, 
                    headers:{
                        'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
                    }
            }).success(function(response){
                return callback(response);
            }) 
    
        }
    }
});



//点击查找功能
productStoreApp.factory('lookForMsg', function () {
    return {
        lookForMsg:function(bjscope ,bjhttp , callback){
            console.log(bjscope.bjSearchValue)
            var bjSearchValue = {};
            bjSearchValue.value= bjscope.bjSearchValue;
            bjhttp({
                    method:"post",  
                    url: "http://localhost:888/lookForMsg",
                    data: bjSearchValue, 
                    headers:{
                        'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
                    }
            }).success(function(response){
                return callback(response);
            })
        }
    }
});