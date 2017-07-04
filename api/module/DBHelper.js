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

        connection.query('SELECT * FROM '+ _collection + ' inner join tcategory on '+_collection +'.category = tcategory.index inner join tsupplier on '+_collection +'.supplier=tsupplier.indexid inner join tunit on '+ _collection +'.Unit = tunit.index', function(error, results, fields) {
            // console.log(fields)
            _callback(results);
            // connection.end();
        }) 
    },
    //搜索功能
    bjSearch:function(_collection, _condition, _callback){
        createConnection();
        connection.connect();
        //'select * from '+_collection+' where indexid = '+_condition.indexid;
        // SELECT * FROM [user] WHERE u_name LIKE '%三%' 
        connection.query('SELECT * FROM '+ _collection + 'where productName = "'+_condition.value+'"'  , function(error, results, fields) {
            console.log(results)
            _callback(results);
            // connection.end();
        }) 
    }
}
