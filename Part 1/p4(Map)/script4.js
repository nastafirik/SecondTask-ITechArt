(function(){
'use strict';

function myMap(array, callback) {
	length=array.length;
	var result=[];
	for (var i=0; i<length; i++) {
		result.push(callback(array[i], i, array));
	}
	return result;
	
}

})();