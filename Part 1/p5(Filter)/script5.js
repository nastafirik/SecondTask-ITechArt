(function(){
'use strict';

function myFilter(array, callback) {
    var result=[];
    length=array.length;
    for (var i=0; i<length; i++) {
        if (callback(array[i], i, array)){
            result.push(array[i]);
		}
    }
    return result;
}

})();
