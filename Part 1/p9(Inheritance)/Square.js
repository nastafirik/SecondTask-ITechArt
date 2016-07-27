'use strict';

    function Square(sideLenght) {
        Shape.call(this, "Square");
        this.sideLength = sideLenght;
    }

    Square.prototype = inherit(Shape.prototype);
    Square.prototype.constructor = Square;

    Square.prototype.calcPerimeter = function () {
        return this.sideLength * 4;
    };

    Square.prototype.calcSquare = function () {
        return this.sideLength * this.sideLength;
    };

var qwert = new Square(2,7);
alert(qwert.calcPerimeter());