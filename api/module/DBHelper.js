var ApiResult = require('./ApiResult')

var mysql = require('mysql');
function openSql(){
	connection = mysql.createConnection({
		host: 'localhost',
        user: 'root',
        password: '',
        port:'3306',
        database:'tan90'
	});
}

//查询所有
module.exports = {
    fetch:function(table,data,callback){
        openSql();
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
    //修改入库
    changebound: function(_collection, data,callback){
		openSql();
		connection.connect();
		console.log(data)
		// var userGetSql = "SELECT * from inbound where supplierName = '"+data.supplierName+"'";
		var userGetSql = 'UPDATE inbound SET inboundID = ?, reserveNum = ? , inbound = ? ,outbound = ? ,writedown = ?  WHERE productID = ?';
		var userAddSql_Params = [data.inboundID,
                                data.reserveNum,
                                data.inbounds,
                                data.outbounds,
                                data.writedown,
                                data.productID,
                                ];
		connection.query(userGetSql, userAddSql_Params,function(err, res) {
			// console.log(rows)
			if (err) {
				console.log('[UPDATE ERROR] - ', err.message);
				callback(false)
				return false;
			}else{
				callback(true)
			}
			console.log(res)
			connection.end();
		});

	},
    //删除
    delinbound:function(_collection, data, _callback){
         openSql();
        connection.connect();
        console.log(data)
        var delid= data.productID;
         var  userDelSql = `DELETE FROM inbound WHERE productID = ${delid}` ;
        //?
        connection.query(userDelSql,function (err, result) {
                if(err){
                  console.log('[DELETE ERROR] - ',err.message);
                  return;
                }       
            _callback(result)
               console.log('-------------DELETE--------------');
              
               
        });
         
        connection.end();
    },












}