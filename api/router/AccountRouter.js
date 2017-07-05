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