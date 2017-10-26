"use strict";

requirejs.config({
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

require(['jquery-ui', 'bootstrap'], function() {
    console.log("require function is being called.");
    $("#slider").slider();
    // $('#EOB').before("<p id='mainRequire'>main.js require function</p>");
});

require(['popperjs'], function(Popper) {
    window.Popper = Popper;
});
