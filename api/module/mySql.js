var mysql = require('mysql');
var DATABASE = 'tan90';
var connection;

function openSql(){
	connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '',
		port: '3306',
		database: 'tan90'
	});
}

module.exports={
	// 查询供应商
	getsupplier: function(_collection,callback) {
	// 一定要这步，要先连接sql
		openSql();
		connection.connect();
		// var data = toString(obj)
		// console.log(obj)
		var  userGetSql = 'SELECT * FROM ' + _collection;
		connection.query(userGetSql, function(err, result) {
			if (err) {
				console.log('[SELECT ERROR] - ', err.message);
				return;
			}
			console.log(result);
			callback(result);
		});
		connection.end();
	},

	// 增加供应商
	addsupplier: function(_collection, data,callback){
		openSql();
		connection.connect();
		var userGetSql = "SELECT * from supplier where supplierName = '"+data.supplierName+"'";
		connection.query(userGetSql, function(err,rows, res) {
			// console.log(rows)
			if (err) {
				console.log('[SELECT ERROR] - ', err.message);
				return false;
			}
			// console.log(res)
			if(!rows[0]){
				var  userAddSql = 'INSERT INTO '+_collection+' (ID,supplierName) VALUES(?,?)';
				var  userAddSql_Params = [data.ID, data.supplierName];
				console.log(userAddSql,userAddSql_Params)
				connection.query(userAddSql,userAddSql_Params,function(err,result){
				if(err){
					console.log('[INSERT ERROR] - ',err.message);
					return;
				}       
					console.log('插入成功')
					callback(true)
			    })
			}else{
				callback(false)
			}
			connection.end();
		});

	},
	//修改供应商
	editsupplier: function(_collection, data,callback){
		openSql();
		connection.connect();
		console.log(data)
		// var userGetSql = "SELECT * from supplier where supplierName = '"+data.supplierName+"'";
		var userGetSql = 'UPDATE supplier SET ID = ?,supplierName= ? WHERE indexid = ?';
		var userAddSql_Params = [data.ID, data.supplierName,data.indexid];
		connection.query(userGetSql,userAddSql_Params,function(err, res) {
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

	// 删除供应商
	delsupplier: function(_collection, data, callback) {
		openSql();
		connection.connect();
		// console.log(data)
		var userAddSql = "DELETE FROM supplier WHERE indexid = '"+data.indexid+"'";
		connection.query(userAddSql, function(err, result) {
			if (err) {
				console.log('[DELETE ERROR] - ', err.message);
				callback(false)
				return;
			}
			console.log('删除成功')
			callback(true)
		})
		connection.end();
	},

	// 查询采购单
	getpurchase: function(_collection,callback) {
	// 一定要这步，要先连接sql
		openSql();
		connection.connect();
		// var data = toString(obj)
		// console.log(obj)
		var  userGetSql = 'SELECT * FROM ' + _collection;
		connection.query(userGetSql, function(err, result) {
			if (err) {
				console.log('[SELECT ERROR] - ', err.message);
				return;
			}
			console.log(result);
			callback(result);
		});
		connection.end();
	},
	// 查询类别
	getcategory: function(_collection,callback) {
	// 一定要这步，要先连接sql
		openSql();
		connection.connect();
		// var data = toString(obj)
		// console.log(obj)
		var  userGetSql = 'SELECT * FROM ' + _collection;
		connection.query(userGetSql, function(err, result) {
			if (err) {
				console.log('[SELECT ERROR] - ', err.message);
				return;
			}
			console.log(result);
			callback(result);
		});
		connection.end();
	},
	// 增加采购单
	addpurchase: function(_collection, data,callback){
		openSql();
		connection.connect();
		var userGetSql = "SELECT * from purchase where productName = '"+data.productName+"'";
		connection.query(userGetSql, function(err,rows, res) {
			// console.log(rows)
			if (err) {
				console.log('[SELECT ERROR] - ', err.message);
				return false;
			}
			// console.log(res)
			if(!rows[0]){
				var  userAddSql = 'INSERT INTO '+_collection+' (ID,qrCode,productName,category,price,qty,totalPrice,supplierName,times) VALUES(?,?,?,?,?,?,?,?,?)';
				var  userAddSql_Params = [data.ID, data.qrCode, data.productName, data.category, data.price, data.qty, data.totalPrice,data.supplierName ,data.times];
				console.log(userAddSql,userAddSql_Params)
				connection.query(userAddSql,userAddSql_Params,function(err,result){
				if(err){
					console.log('[INSERT ERROR] - ',err.message);
					callback(false)
					return;
				}       
					console.log('插入成功')
					callback(true)
			    })
			}else{
				callback(false)
			}
			connection.end();
		});

	},

	//修改采购单
	editpurchase: function(_collection, data,callback){
		openSql();
		connection.connect();
		console.log(data)
		// var userGetSql = "SELECT * from supplier where supplierName = '"+data.supplierName+"'";
		var userGetSql = 'UPDATE purchase SET ID = ?,qrCode= ?,productName= ?,category= ?,price= ?,qty= ?,totalPrice= ?,supplierName= ?,times= ? WHERE indexid = ?';
		var  userAddSql_Params = [data.ID, data.qrCode, data.productName, data.category, data.price, data.qty, data.totalPrice,data.supplierName ,data.times,data.indexid];
		connection.query(userGetSql,userAddSql_Params,function(err, res) {
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
	// 删除采购单
	delpurchase: function(_collection, data, callback) {
		openSql();
		connection.connect();
		// console.log(data)
		var userAddSql = "DELETE FROM purchase WHERE indexid = '"+data.indexid+"'";
		connection.query(userAddSql, function(err, result) {
			if (err) {
				console.log('[DELETE ERROR] - ', err.message);
				callback(false)
				return;
			}
			console.log('删除成功')
			callback(true)
		})
		connection.end();
	},


	//===================xrt===================//
	//查询用户
	getpersonnel: function(_collection, obj, callback) {
	// 一定要这步，要先连接sql
		openSql();
		connection.connect();

		console.log('obj.usersName',obj.usersName)
		var userGetSql;

		if (obj.usersName) {
			userGetSql = "SELECT * FROM users where usersName = '" + obj.usersName + "'";
				connection.query(userGetSql, function(err, rows, result) {
				if (err) {
					console.log('[SELECT ERROR] - ', err.message);
					return;
				}
				if(rows[0]){
					console.log(rows[0],'存在');
					callback(rows[0]);				
				}else{
					console.log('没有记录')
					callback(false)
				}

			});

		}else{
			userGetSql = "SELECT * FROM " + _collection;
			connection.query(userGetSql, function(err, result) {
				if (err) {
					console.log('[SELECT ERROR] - ', err.message);
					return;
				}
				console.log(result[0]);
				callback(result);
			});
		}


		connection.end();
	},

}
	
