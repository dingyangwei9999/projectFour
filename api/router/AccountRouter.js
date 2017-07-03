var DB = require('../module/DBHelper');
var ApiResult = require('../module/ApiResult');

var bodyParser = require('body-parser');


var urlencodedParser = bodyParser.urlencoded({ extended: false })

exports.Register = function(app) {
    
    //读取地址
    app.post('/inbound',urlencodedParser, function(request, response){
        DB.fetch('tproduct',{productID:123}, function(result){
            //第一个表名
            response.send(result);
        })
    })
    
}