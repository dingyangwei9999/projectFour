var ApiResult = require('./ApiResult')

var mysql = require('mysql');

module.exports = {
    fetch:function(table,data,callback){
        console.log(table,data)
        
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            port:'3306',
            database:'tan90'
        });
        connection.connect();
        //查询
        connection.query('select * from ' + table, function(err, rows, fields) {
            if (err) throw err;

            // console.log('查询结果为: ', rows);
            callback(rows);
        });
        //关闭连接
        connection.end();
    },
    // editsupplier: function(_collection, data,callback){
	// 	openSql();
	// 	connection.connect();
	// 	console.log(data)
	// 	// var userGetSql = "SELECT * from supplier where supplierName = '"+data.supplierName+"'";
	// 	var userGetSql = 'UPDATE inbound SET ID = ?,inboundID= ? WHERE productID = ?';
	// 	var userAddSql_Params = [data.ID, data.supplierName,data.indexid];
	// 	connection.query(userGetSql, userAddSql_Params,function(err, res) {
	// 		// console.log(rows)
	// 		if (err) {
	// 			console.log('[UPDATE ERROR] - ', err.message);
	// 			callback(false)
	// 			return false;
	// 		}else{
	// 			callback(true)
	// 		}
	// 		console.log(res)
	// 		connection.end();
	// 	});

	// },
}