var DB = require('../module/DBHelper');
var sql = require('../module/mySql.js');
var ApiResult = require('../module/ApiResult.js');

var bodyParser = require('body-parser');


//如果要使用cookie，需要显式包含这个模块
var cookieParser = require('cookie-parser');
//如果要使用session，需要单独包含这个模块
var session = require('express-session');


// var multer = require ('multer');
// var storage = multer.diskStorage({  
//   destination: function (req, file, cb) {  
//     cb(null, '../../../../project/wrj/web/src/assets/imgs/goods/')  
//   },  
//   filename: function (req, file, cb) {  
//       var fileFormat = (file.originalname).split(".");
//       cb(null, file.fieldname + '-' + Date.now() + "." + fileFormat[fileFormat.length - 1]);    
//   }  
// }) 
// var upload = multer({ storage: storage })
var urlencodedParser = bodyParser.urlencoded({ extended: false })

exports.Register = function(app) {
    //获取商品信息表格的内容-白晶晶
    app.get('/getTproducts',function(request,response){
        var obj = request.query;
        DB.getTproducts('tproducts',obj,function(result){
            // console.log(result)
            response.send(result);
        })
    })
    //获取单位信息表格的内容-白晶晶
    app.get('/addTunit',function(request,response){
        var obj = request.query;
        DB.get('tunit',obj,function(result){
            // console.log(result)
            response.send(result);
        })
    })

    //获取商品类型信息表格的内容-白晶晶
    app.get('/addTcategory',function(request,response){
        var obj = request.query;
        DB.get('tcategory',obj,function(result){
            // console.log(result)
            response.send(result);
        })
    })
    
    //获取供应商信息表格的内容-白晶晶
    app.get('/addTsupplier',function(request,response){
        var obj = request.query;
        DB.get('supplier',obj,function(result){
            // console.log(result)
            response.send(result);
        })
    })
    
    //新增商品信息-白晶晶
    app.post('/addProductContent',urlencodedParser,function(request,response){
        
        var obj = request.body;
        console.log(obj)
        DB.add('tproducts',obj,function(result){
            response.send(result);
        })
    })


    //新增单位信息-白晶晶
    app.post('/addUnitContent',urlencodedParser,function(request,response){
        
        var obj = request.body;
        console.log(obj)
        DB.addunit('tunit',obj,function(result){
            response.send(result);
        })
    })



    //新增商品类型信息-白晶晶
    app.post('/saveCategory',urlencodedParser,function(request,response){
        
        var obj = request.body;
        console.log(obj)
        DB.addcategory('tcategory',obj,function(result){
            response.send(result);
        })
    })
    
    //搜索功能-白晶晶
    
    app.post('/lookForMsg',urlencodedParser,function(request,response){
        var obj = request.body;
        console.log(obj)
        DB.bjSearch('tproducts',obj,function(result){
            response.send(result);
        })
    })
    
   //==============================徐榕添============//
   
   app.get('/getpersonnel', urlencodedParser, function(request, response){
        var obj = request.query;
        console.log('obj--->',obj, obj.usersName)
        sql.getpersonnel('users', obj, function(result){
        	console.log('back->',result)
        	response.send(result);
    	})	

	})

    //=====================ltq====================//
    app.get('/fetch',function(request, response){
            // "{'{qrCode:qrCode}':''}""[]"
            // console.log(request.query)
            // console.log(typeof request.body.productId)
            // console.log(request.body.productId)
            DB.fetch('tproducts',request.query,function(result) {
                // console.log(result)
                if(result[0]){
                    response.send(ApiResult(true,result));
                }else{
                    response.send(ApiResult(false,result));
                }
                
            })
    })

    app.post('/order',urlencodedParser,function(request, response){
            console.log(request.body)
            // "{'{qrCode:qrCode}':''}""[]"
            // console.log(request.query)
            // console.log(typeof request.body.productId)
            // console.log(request.body.productId)
            DB.order('order',request.body,function(result) {
                // console.log(result)
                
                response.send(ApiResult(true,result));
            })
    })




   //========================llw==================//
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
	

    //========================yyt====================//

    //读取入库表
    app.post('/inbound',urlencodedParser, function(request, response){
        DB.fetchyyt('inbound',{}, function(result){
            //第一个参数表名，第二个为数据库的键
            response.send(result);
        })
    })

    //修改入库表
    app.post('/changebound',urlencodedParser, function(request, response){
        var obbj = request.body;
        DB.changebound('inbound',obbj, function(result){
            //第一个参数表名，第二个为数据库的键
            response.send('result');
        })
    })

    //删除入库表
    app.post('/delbound',urlencodedParser, function(request, response){
        var PID = request.body;
        console.log(PID)
        DB.delinbound('inbound',PID, function(result){
            //第一个参数表名，第二个为数据库的键
            response.send('result');
        })
    })



}