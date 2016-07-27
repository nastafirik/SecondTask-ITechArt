(function(){
'use strict';

function add() {
    var sum=0;
    for (var i = 0; i < arguments.length; i++) {
        sum+=arguments[i];
    }
    return sum;
}

function lazyEvaluate(f) {
    return partial.apply(null, arguments);
}

function partial(func) {
        var slice =Array.prototype.slice;
        var args = slice.call(arguments, 1);
        return function () {
            var innerArguments = slice.call(arguments);
            args = args.concat(innerArguments);
            return func.apply(this, args);
        }
    }

})();