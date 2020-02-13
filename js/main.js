// (function() {
//     $('#redbutton').on('click', function() {
//         $('header').text('Red')
//     });
//     $('#greenbutton').on('click', function() {
//         $('header').text('Green')
//     });
//     $('#bluebutton').on('click', function() {
//         $('header').text('Blue')
//     });
// })();

//JavaScript to change color on keydown
/*function checkKeyPress(key) {
    if (key.keyCode =="65") {
        $('header').text('Red')
    }
    if (key.keyCode =="83") {
        $('header').text('Green')
    }
    if (key.keyCode =="68") {
        $('header').text('Blue')
    }
}*/

//JQuery to change color on keydown with too many ifs
// $(document).on('keydown', function (e) {  
//     if (e.keyCode == 65 ) {
//         $('header').text('Red')
//     }
//     if (e.keyCode == 83 ) {
//         $('header').text('Green')
//     }
//     if (e.keyCode == 68 ) {
//         $('header').text('Blue')
//     }
// });

/*$(document).on('keydown', function (e) {  
    switch (e.keyCode) {
        case 65:
            color = "Red";
            break;
        case 83:
            color = "Green";
            break;
        case 68:
            color = "Blue";
        }
        $('header').text(color)
});*/

//Toggle Background color
/*$(document).on('keydown', function (e) {  
    switch (e.keyCode) {
        case 65:
            color = "Red";
            break;
        case 83:
            color = "Green";
            break;
        case 68:
            color = "Blue";
        }
        $('header').css('background', color)
});*/

//Toggle background color with JQuery
$(document).on('keydown', function (e) {  
    switch (e.keyCode) {
        case 65:
            color = "redbg";
            break;
        case 83:
            color = "greenbg";
            break;
        case 68:
            color = "bluebg";
        }
        
        if (typeof color !== 'undefined'){
            $('header')
                .attr('class', '')
                .addClass(color);
        }
});