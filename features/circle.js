/*
    Area of Circle = PI * radius * radius
*/ 
define(['./ellipse'], function(ellipse) {
    return function(radius) {
        return ellipse(radius, radius);
    };
});