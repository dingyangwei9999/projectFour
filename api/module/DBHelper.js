var ApiResult = require('./ApiResult')
var mysql = require('mysql');
var TEST_DATABASE = 'tan90'; 

function createConnection() {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        port:'3306',
        database:'tan90'
    });
}

module.exports={
    get:function(_collection, _condition, _callback){
        // console.log(_collection,_condition)
        createConnection();
        connection.connect();
        connection.query('SELECT * FROM '+_collection, function(error, results, fields) {
            _callback(results);
            // connection.end();
        }) 
    },
    add:function(_collection, _condition, _callback){
        // console.log(_collection,_condition)
        createConnection();
        connection.connect();

        var  userAddSql = 'INSERT INTO '+_collection+'(indexid,qrCode,productName,purchasingCost,salePrice,Unit,category,supplier,storageTime,storeNum) VALUES(0,?,?,?,?,?,?,?,?,?)';
        var  userAddSql_Params = [_condition.qrCode,_condition.productName,_condition.purchasingCost,_condition.salePrice,_condition.Unit,_condition.category,_condition.supplier,_condition.storageTime,_condition.storeNum];

        connection.query(userAddSql,userAddSql_Params)
        // connection.end();
    },
    addunit:function(_collection, _condition, _callback){
        createConnection();
        connection.connect();

        var  userAddSql = 'INSERT INTO '+_collection+' (unit) VALUES(?)';
        var  userAddSql_Params = [_condition.unit];

        connection.query(userAddSql,userAddSql_Params);
        connection.end();
    },

    addcategory:function(_collection, _condition, _callback){
        createConnection();
        connection.connect();

        var  userAddSql = 'INSERT INTO '+_collection+' (category) VALUES(?)';
        var  userAddSql_Params = [_condition.category];

        connection.query(userAddSql,userAddSql_Params);
        connection.end();
    },
    delete:function(_collection,_condition,_callback){
        // console.log(_collection,_condition)
        createConnection();
        connection.connect();

        var  userDelSql = 'DELETE FROM goods WHERE qrcode = '+_condition.qrcode;

        connection.query(userDelSql)
        connection.end();
    },
    update:function(_collection,_condition,_callback){
        createConnection();
        connection.connect();

        var userModSql = 'UPDATE goods SET qrcode = ?,proname = ?,proprice = ?,specification = ?,category = ?,qty = ?,suppliername = ? WHERE qrcode = ?';
        var userModSql_Params = [_condition.qrcode,_condition.proname,_condition.proprice,_condition.specification,_condition.category,_condition.qty,_condition.suppliername,_condition.qrcode];
        
        connection.query(userModSql,userModSql_Params)
        connection.end();
    },
    getTproducts:function(_collection, _condition, _callback){
        // console.log(_collection,_condition)
        createConnection();
        connection.connect();

        connection.query('SELECT * FROM '+ _collection + ' inner join tcategory on '+_collection +'.category = tcategory.index inner join supplier on '+_collection +'.supplier=supplier.indexid inner join tunit on '+ _collection +'.Unit = tunit.index', function(error, results, fields) {
            // console.log(fields)
            _callback(results);
            // connection.end();
        }) 
    },
    //搜索功能
    bjSearch:function(_collection, _condition, _callback){
        createConnection();
        connection.connect();
        console.log( _condition.value)
        //'select * from '+_collection+' where indexid = '+_condition.indexid;
        // SELECT * FROM [user] WHERE u_name LIKE '%三%' 
        connection.query('SELECT * FROM '+ _collection + ' where productName = "'+_condition.value+'" or qrCode = "'+_condition.value+'"' , function(error, results, fields) {
            console.log(results)
            _callback(results);
            // connection.end();
        }) 
    },




    //==========ltq========//
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
    },

    //============yyt====================//
    fetchyyt:function(table,data,callback){
        createConnection();
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
		createConnection();
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
         createConnection();
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
