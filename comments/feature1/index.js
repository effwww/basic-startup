define(['jquery', './part1'], function() {
    console.log('feature1/index.js is loaded');
    $('#EOB').before('<p id="feature1">Feature 1</p>');
});