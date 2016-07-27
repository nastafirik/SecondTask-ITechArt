'use strict';

    function ShapesStore() {
        this.store = [];
    }

    ShapesStore.prototype.calcAllSquaresArea = function () {
        var res = 0;
        for (var i = 0, length = this.store.length; i < length; i++){
            var square = this.store[i];
            if(square instanceof Square){
                res += square.calcSquare();
            }
        }
        return res;
    };

    ShapesStore.prototype.calcAllRectanglesPerimeter = function () {
        var res = 0;
        for (var i = 0, length = this.store.length; i < length; i++){
            var rect = this.store[i];
            if(rect instanceof Rectangle){
                res += rect.calcPerimeter();
            }
        }
        return res;
    };

   