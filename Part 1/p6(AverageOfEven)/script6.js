(function(){

'use strict';

   function average(arr) {
    var filteredArray = myFilter(arr,function(n) {
        return n % 2==0;
    });
    var filteredSum = myReduce(filteredArray, function (sum, current) {
        return sum + current;
    }, 0);
    return filteredSum / filteredArray.length;
}


 	function myFilter(array, callback) {
    var result=[];
    length=array.length;
    	for (var i=0;i<length;i++) {
        if (callback(array[i], i, array)){
        result.push(array[i]);
		}
		}
		return result;
	};


    
	function myReduce(inputArray, callback, initialValue) {
		length = inputArray.length;
		for (var i=0; i < length; i++) {
		initialValue = callback(initialValue, inputArray[i], i, inputArray);
		}
		return initialValue;
	};

})();