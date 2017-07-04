var DB = require('../module/DBHelper');
var ApiResult = require('../module/ApiResult');

var bodyParser = require('body-parser');
// var MongoDB = require('mongodb');
// var MongoDBServer = new MongoDB.Server('localhost', 27017);
// var db = new MongoDB.Db('tan90', MongoDBServer);

var urlencodedParser = bodyParser.urlencoded({ extended: false })

exports.Register = function(app) {
    app.get('/fetch',function(request, response){
            // "{'{qrCode:qrCode}':''}""[]"
            // console.log(request.query)
            // console.log(typeof request.body.productId)
            // console.log(request.body.productId)
            DB.fetch('tproduct',request.query,function(result) {
                // console.log(result)
                if(result[0]){
                    response.send(ApiResult(true,result));
                }else{
                    response.send(ApiResult(false,result));
                }
                
            })
    })

   
   
}