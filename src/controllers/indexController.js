var indexApp = angular.module('indexApp', []);


productStoreApp.factory('changeHeadWord', function () {
    return {
        
        changeHeadWord:function(){
                
            return {"title1":"商品","title2":"商品资料"};
        }
    }
});
