var sql = require('../module/mySql.js');

var ApiResult = require('../module/ApiResult.js')

var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false })


//如果要使用cookie，需要显式包含这个模块
var cookieParser = require('cookie-parser');
//如果要使用session，需要单独包含这个模块
var session = require('express-session');


exports.Register = function(app){
	//添加供应商
	app.get('/addsupplier', urlencodedParser, function(request, response){
	 	var obj = request.query;
	 	console.log(request.query)
        sql.addsupplier('supplier',obj,function(result){
        	console.log(result)
        	response.send(result);
    	})	

	})
	//获取供应商
	app.get('/getsupplier', urlencodedParser, function(request, response){
	 	// var obj = request.query;
	 	// console.log(request.query)
        sql.getsupplier('supplier',function(result){
        	console.log(result)
        	response.send(result);
    	})	

	})

	//修改供应商
	app.get('/editsupplier', urlencodedParser, function(request, response){
	 	var obj = request.query;
	 	// console.log(request.query)
        sql.editsupplier('supplier',obj,function(result){
        	console.log(result)
        	response.send(result);
    	})	

	})

	// 删除供应商
	app.get('/delsupplier', urlencodedParser, function(request, response){
	 	var obj = request.query;
	 	console.log(request.query)
        sql.delsupplier('supplier',obj,function(result){
        	response.send(result);
    	})	

	});

	//获取采购单
	app.get('/getpurchase', urlencodedParser, function(request, response){
	 	// var obj = request.query;
	 	// console.log(request.query)
        sql.getpurchase('purchase',function(result){
        	console.log(result)
        	response.send(result);
    	})	

	})
	//获取类别
	app.get('/getcategory', urlencodedParser, function(request, response){
	 	// var obj = request.query;
	 	// console.log(request.query)
        sql.getcategory('tcategory',function(result){
        	console.log(result)
        	response.send(result);
    	})	

	})

	//添加采购单
	app.get('/addpurchase', urlencodedParser, function(request, response){
	 	var obj = request.query;
	 	console.log(request.query)
        sql.addpurchase('purchase',obj,function(result){
        	console.log(result)
        	response.send(result);
    	})	

	})
	//修改采购单
	app.get('/editpurchase', urlencodedParser, function(request, response){
	 	var obj = request.query;
	 	console.log(request.query)
        sql.editpurchase('purchase',obj,function(result){
        	console.log(result)
        	response.send(result);
    	})	

	})

	// 删除采购单
	app.get('/delpurchase', urlencodedParser, function(request, response){
	 	var obj = request.query;
	 	console.log(request.query)
        sql.delpurchase('purchase',obj,function(result){
        	response.send(result);
    	})	

	});


}