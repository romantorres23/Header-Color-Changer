(function() {
    $('#redbutton').on('click', function() {
        $('header').text('Red')
    });
    $('#greenbutton').on('click', function() {
        $('header').text('Green')
    });
    $('#bluebutton').on('click', function() {
        $('header').text('Blue')
    });
})();