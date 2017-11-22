/*
    Area of Ellipse = PI * a * b 
*/ 
define(['constants'], function(constants) {
    return function(a, b) {
        return constants.PI * a * b;
    };
});