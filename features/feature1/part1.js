define(['jquery'], function() {
    console.log('part1.js, a part for feature1 is loaded');
    $('#EOB').before('<p id="part1">Feature 1 Part 1</p>');
});