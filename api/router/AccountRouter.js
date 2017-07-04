var DB = require('../module/DBHelper');
var ApiResult = require('../module/ApiResult');

var bodyParser = require('body-parser');


var urlencodedParser = bodyParser.urlencoded({ extended: false })

exports.Register = function(app) {
    
    //读取入库表
    app.post('/inbound',urlencodedParser, function(request, response){
        DB.fetch('inbound',{}, function(result){
            //第一个参数表名，第二个为数据库的键
            response.send(result);
        })
    })

    //修改入库表
    app.post('/changebound',urlencodedParser, function(request, response){
        console.log(request.params)
        var obbj = request.body;
        console.log(obbj)
        DB.changebound('inbound',obbj, function(result){
            //第一个参数表名，第二个为数据库的键
            response.send('result');
        })
    })
    
}