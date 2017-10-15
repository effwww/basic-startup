"use strict";

requirejs.config({
    paths: {
        "jquery": "/node_modules/jquery/dist/jquery",
        "jquery-ui": "/node_modules/jquery-ui-bundle/jquery-ui"
    },
    shim: {
        // "jquery-ui": ['jquery_']
    }
});

require(['jquery-ui'], function() {
    console.log("require function is being called.");
    $("#slider").slider();
    // $('#EOB').before("<p id='mainRequire'>main.js require function</p>");
});

/*
<script src="/node_modules/jquery/dist/jquery.js"></script>
<script src="/node_modules/jquery-ui-bundle/jquery-ui.js"></script>
<script src="/node_modules/popper.js/dist/umd/popper.js"></script>
<script src="/node_modules/bootstrap/dist/js/bootstrap.min.js"></script>

<script>
    $(function() {
        $("#slider").slider();
    });
</script>
*/