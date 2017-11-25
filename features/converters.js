define(['constants'], function(constants) {
    return {
        degree2radian: function(angleInDegrees) {
            return angleInDegrees * (2 * constants.PI / 360);
        }
    };
});