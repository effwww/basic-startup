/*
Area of Trapezoid = (top + base) * height / 2
*/
define(['./parallelogram'], function(parallelogram) {
    return function(top, base, height) {
        return parallelogram(top + base, height) / 2;
    };
});