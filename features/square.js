/*
Area of Square = Side x Side or Square of a Side
*/
define(['./rectangle'], function(rectangle) {
    return function(side) {
        return rectangle(side, side);
    };
});