"use strict";

requirejs.config({
    baseUrl: "features",
    paths: {
        "jquery": "/node_modules/jquery/dist/jquery",
        "jquery-ui": "/node_modules/jquery-ui-bundle/jquery-ui",
        "popperjs": "/node_modules/popper.js/dist/umd/popper",
        "bootstrap": "/node_modules/bootstrap/dist/js/bootstrap"
    },
    shim: {
        // "jquery-ui": ['jquery_']
        "bootstrap": ['jquery', 'popperjs']
    }
});

require(['jquery-ui', 'bootstrap', 'square', 'circle', 'ellipse', 'rectangle', 'parallelogram', 'triangle', 'trapezoid', 'sector', 'constants', 'converters' ],
            function(jqueryUi, bootstrap, square, circle, ellipse, rectangle, parallelogram, triangle, trapezoid, sector, constants, converters) {
    console.log("require function is being called.");
    $("#slider").slider();
    // $('#EOB').before("<p id='mainRequire'>main.js require function</p>");

    var areaOfSquare = square(2);
    console.log('Area of Square = ' + areaOfSquare);
    
    var areaOfCircle = circle(2);
    console.log('Area of Circle = ' + areaOfCircle);

    var areaOfEllipse = ellipse(2, 3);
    console.log('Area of Ellipse = ' + areaOfEllipse);

    var areaOfRectangle = rectangle(2, 3);
    console.log('Area of Rectangle = ' + areaOfRectangle);

    var areaOfParallelogram = parallelogram(2, 3);
    console.log('Area of Parallelogram = ' + areaOfParallelogram);

    var areaOfTriangle = triangle(2, 3);
    console.log('Area of Triangle = ' + areaOfTriangle);

    var areaOfTrapezoid = trapezoid(1, 2, 3);
    console.log('Area of Trapezoid = ' + areaOfTrapezoid);

    var areaOfSector = sector(2, converters.degree2radian(90));
    console.log('Area of Sector = ' + areaOfSector);
});

require(['popperjs'], function(Popper) {
    window.Popper = Popper;
});
