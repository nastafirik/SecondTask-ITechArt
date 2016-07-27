(function(){   
	'use strict';
    var FunctionPatrial = partial(muchOneArguments, 15, 17, 19);
    var result = FunctionPatrial(90,82,67);
  
    function partial(func) {
        var slice =Array.prototype.slice;
        var args = slice.call(arguments, 1);
        return function () {
            var innerArguments = slice.call(arguments);
            args = args.concat(innerArguments);
            return func.apply(this, args);
        }
    }

    function muchOneArguments() {
        var result = 0;
        for (var i = 0; i < arguments.length; i++) {
            result += arguments[i];
        }
        return result;
    }
	
})();
