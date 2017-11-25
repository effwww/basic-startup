/*
    Area of Circle = PI * radius * radius
*/ 
define(['./constants', './circle'], function(constants, circle) {
    return function(radius, angleInRadian) {
        return circle(radius) * (angleInRadian / 2 / constants.PI  ) ;
    };
});