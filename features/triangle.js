/*
Area of Triangle = base * height / 2
*/
define(['./parallelogram'], function(parallelogram) {
    return function(base, height) {
        return parallelogram(base, height) / 2;
    };
});