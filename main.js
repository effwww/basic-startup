requirejs.config({
    // baseUrl: "/features",
    // waitSeconds: 10,
    paths: {
        // jquery: "/node_modules/jquery/dist/jquery.min"
    },
    shim: {
        /*
        jquery: {
            exports: '$'
        }
        */
    }
});


require(['jquery'], function() {
    console.log("require function is being called.");
    // $('#EOB').before("<p id='mainRequire'>main.js require function</p>");
});
