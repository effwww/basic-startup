/*
    Area of Circle = PI * radius * radius
*/ 
define(['constants'], function(constants) {
    return function(radius) {
        return constants.PI * radius * radius;
    };
});