var DB = require('../module/DBHelper');
var ApiResult = require('../module/ApiResult.js');

var bodyParser = require('body-parser');
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
        DB.get('tsupplier',obj,function(result){
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
    
   
}