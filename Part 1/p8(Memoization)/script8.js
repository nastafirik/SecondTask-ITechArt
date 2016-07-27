(function(){
'use strict';

    function memoize(func) {
        var cache = {};
        
        return function () {
            var key = arguments.length + Array.prototype.join.call(arguments, ',');
			if (arguments[0] === null) key += "null";
			if (arguments[0] === undefined) key += "undefind";
             if (key in cache) {
                return cache[key];
            } else {
                cache[key] = func.apply(null, arguments);
                return cache[key];
            }
        };
    }
})();