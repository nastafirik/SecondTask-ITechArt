'use strict';

    function Rectangle(width, height) {
        Shape.call(this, "Rectangle");
        this.width = width;
        this.height = height;
    }

    Rectangle.prototype = inherit(Shape.prototype);
    Rectangle.prototype.constructor = Rectangle;

    Rectangle.prototype.calcPerimeter = function () {
        return (this.height + this.width) * 2;
    };

    Rectangle.prototype.calcSquare = function () {
        return this.height * this.width;
    };



var qwe = new Rectangle(1,9);
alert(qwe.calcPerimeter());