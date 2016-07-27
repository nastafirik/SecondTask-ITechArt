(function(){
'use strict';

function myReduce(inputArray, callback, initialValue) {
	var result = initialValue;
	var length = inputArray.length;
    
	for (var i=0; i < length; i++) {
		result = callback(result, inputArray[i], i, inputArray);
	}
	return result;
}

})();