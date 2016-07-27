(function(){
	'use strict';
    function currying(func) {
        var arr = Array.prototype.slice.call(arguments, 1);
        return function f(arg) {
            arr = arr.concat(arg);
            if (arr.length >= func.length) {
                return func.apply(null, arr);
            } else {
                return f;
            }
        };
    }
})();

