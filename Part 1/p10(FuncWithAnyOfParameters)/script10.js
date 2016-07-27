(function(){
'use strict';

 function multiple() {
    var args=arguments;
    var result=myReduce(args, function (multipl, current) {
        return multipl*current;
    }, 1);
    return result;
}

function myReduce(inputArray, callback, initialValue) {
	length = inputArray.length;
    
	for (var i=0; i < length; i++) {
		initialValue = callback(initialValue, inputArray[i], i, inputArray);
	}
	return initialValue;
}

})();
