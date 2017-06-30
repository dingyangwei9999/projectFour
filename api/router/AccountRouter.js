var DB = require('../module/DBHelper');
var ApiResult = require('../module/ApiResult');

var bodyParser = require('body-parser');
var MongoDB = require('mongodb');
var MongoDBServer = new MongoDB.Server('localhost', 27017);
var db = new MongoDB.Db('tan90', MongoDBServer);

var urlencodedParser = bodyParser.urlencoded({ extended: false })

exports.Register = function(app) {


   
    //tan90便利details数据获取
    app.get('/getDetailsMsg',urlencodedParser, function(request, response){
        if (!request.query || !request.query.productId) {
            response.send(ApiResult(false, '没有找到该商品'));
        } else {
            // console.log(typeof request.query.productId)
            // console.log(request.query.productId)
            DB.get('good', { id: request.query.productId }, function(result) {
                // console.log(result)
                if (!result.status) {
                    response.send(result);
                } else {
                    var data = result.data;
                    response.send(ApiResult(true,result));
                }
            })
        }
    })


    //tan90便利details数据获取
    // app.get('/getDetailsMsg',urlencodedParser, function(request, response){
    //     if (!request.query || !request.query.productId) {
    //         response.send(ApiResult(false, '没有找到该商品'));
    //     } else {
    //         // console.log(typeof request.query.productId)
    //         // console.log(request.query.productId)
    //         DB.get('goods', { productId: request.query.productId }, function(result) {
    //             // console.log(result)
    //             if (!result.status) {
    //                 response.send(result);
    //             } else {
    //                 var data = result.data;
    //                 response.send(ApiResult(true,result));
    //             }
    //         })
    //     }
    // })
  
    //存储car商品信息
    app.post('/setDetailsMsg', urlencodedParser, function(request, response) {
        // console.log(request.query.productId)
        db.open(function(dberror) {
            if (dberror) {
               ApiResult(false, null, dberror);
                return;
            }
            db.collection('cargoods', function(collerror, collection) {
                if (collerror) {
                    ApiResult(false, null, collerror);
                    return;
                }
                // console.log(request.body)
                collection.find({productId:request.body.productId}).toArray(function(err, docs){
                    if(!docs[0]){
                        // console.log('!docs',111)
                        collection.insert(request.body, function(err, result) {
                            if (err) {
                                ApiResult(false, null, err);
                            } else {
                                ApiResult(true, null, result);
                            }
                        })
                       
                    }else if(docs[0]){
                        // console.log('docs',123)
                        if(request.body.productNum<="0"){
                            collection.remove(docs[0],function(err,result){
                                if(err){
                                    ApiResult(false, null, err);
                                    return;
                                }else{
                                    ApiResult(true, null, result);
                                }
                            })
            
                        }else{
                            // console.log('docssssss')
                            collection.update({productId:request.body.productId},{$set:{productNum:request.body.productNum,singleTotalPrice:request.body.singleTotalPrice}});
                            ApiResult(true, null, docs)
                            
                        }
                    }
                    db.close();
                    
                })
                
            })
            
        })
    });


    //tan90便利car数据获取
    app.post('/getCar',urlencodedParser, function(request, response){

            // console.log(typeof request.body.productId)
            // console.log(request.body.productId)
            DB.get('cargoods', {}, function(result) {
                // console.log(result)
                if (!result.status) {
                    response.send(result);
                } else {
                    var data = result.data;
                    response.send(ApiResult(true,result));
                }
            })
        
    })
  
    //删除某条car数据
    // deleteDetailsData
    app.post('/deleteDetailsData', urlencodedParser, function(request, response) {
        // console.log(request.query.productId)
        db.open(function(dberror) {
            if (dberror) {
               ApiResult(false, null, dberror);
                return;
            }
            db.collection('cargoods', function(collerror, collection) {
                if (collerror) {
                    ApiResult(false, null, collerror);
                    return;
                }
                // console.log(request.body)
                collection.find({productId:request.body.productId}).toArray(function(err, docs){
                    if(!docs[0]){
                        // console.log('!docs',111)
                        ApiResult(false, null, err);
                    }else if(docs[0]){
                        // console.log('docs',123)
                        collection.remove(docs[0],function(err,result){
                            if(err){
                                ApiResult(false, null, err);
                                return;
                            }else{
                                ApiResult(true, null, result);
                            }
                        })

                    }
                    db.close();
                    
                })
                
            })
            
        })
    });

    //存入订单
    app.post('/saveOrder',urlencodedParser, function(request, response) {
        if (!request.body || !request.body.orderNum) {
            response.send(ApiResult(false, '没有找到该商品'));
        } else {
            DB.insert('orderMsg', request.body, function(result){
                response.send(result);
            })
        }
    })

    //读取订单
    app.post('/readOrder',urlencodedParser, function(request, response) {
        DB.get('orderMsg',{}, function(result){
            response.send(result);
        })
    })
    
    //读取地址
    app.post('/readOrderAdress',urlencodedParser, function(request, response){
        DB.get('address',{}, function(result){
            response.send(result);
        })
    })
    
}