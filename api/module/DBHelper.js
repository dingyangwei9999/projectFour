var ApiResult = require('./ApiResult')

var mysql = require('mysql');

module.exports = {
    fetch:function(table,data,callback){
        // console.log(table)
        
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            port:'3306',
            database:'tan90'
        });
        connection.connect();
        var searchContent = 'select * from ' + table + ' where qrCode = ' + data.qrCode;
        //查询
        connection.query(searchContent, function(err, rows, fields) {
            if (err) throw err;

            // console.log('查询结果为: ', rows);
            callback(rows);
        });
        //关闭连接hn
        connection.end();
    },
    order:function(table,data,callback){
        // console.log(table)
        
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            port:'3306',
            database:'tan90'
        });
        connection.connect();
        var addContent = "insert into `order`(ymd,hms,odd,goods,printPrice,printDis) values('"+data.ymd+"','"+data.hms+"','"+data.odd+"','"+data.goods+"','"+data.printPrice+"','"+data.printDis+"')";
        // var condition = 'INSERT INTO order(ymd,hms,odd,goods,printPrice,printDis) VALUES(?,?,?,?,?,?)';
        // var arr = [data.ymd,data.hms,data.odd,data.goods,data.printPrice,data.printDis];
        //增加订单
        // console.log(addContent)
        connection.query(addContent,function(err, rows, fields) {
            if (err) throw err;

            // console.log('结果为: ', rows);
            callback(rows);
        });
        //关闭连接hn
        connection.end();
    }
}
