/*
Area of Rectangle = width * height
*/
define(['./parallelogram'], function(parallelogram) {
    return function(width, height) {
        return parallelogram(width, height);
    };
});