    'use strict';

    function Shape(name) {
        this.name = name;
    }

    Shape.prototype.calcPerimeter = function () {
        return "shape perimeter";
    };

    Shape.prototype.calcSquare = function () {
        return "shape square";
    };
