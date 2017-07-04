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
    }
}
