"use strict";

const NUM_OF_FLOWER_PICS = 20 - 1;

window.scroll(0, 1); // Android: Hide address bar

var timeoutId = 0;
function doTimerHandling() {

    if (timeoutId != 0) {
        clearTimeout(timeoutId);
    }
    timeoutId = setTimeout( 
        function() {
            $('.content').text("Hattest Du heute schon Blumen?"); 
            timeoutId = 0;
        }, 5000 );
}

$('.btn-no').click(
function() {
    var picPath = "url(pics/flowers/" + Math.floor(Math.random() * NUM_OF_FLOWER_PICS).toString() + ".PNG)";
    //$('.frame').css("background", "url(pics/flowers/001.PNG)");
    $('.frame').css("background", picPath);
    $('.content').text("Bitte schön!");

    doTimerHandling();
});

$('.btn-yes').click(
function() {
    var picPath = "url(pics/flowers/" + Math.floor(Math.random() * NUM_OF_FLOWER_PICS).toString() + ".PNG)";
    //$('.frame').css("background", "url(pics/flowers/001.PNG)");
    $('.frame').css("background", picPath);
    $('.content').text("... dann bekommst Du eben nochmal welche :)");

    doTimerHandling();
});

window.onload = function() {
    var myShakeEvent = new Shake({
        threshold: 15, // optional shake strength threshold
        timeout: 1000 // optional, determines the frequency of event generation
    });
    myShakeEvent.start();

    window.addEventListener('shake', shakeEventDidOccur, false);
    
    function shakeEventDidOccur() {
        $('.frame').css("background", "url(pics/torte.png)");
        $('.content').text("HAPPY BIRTHDAY!!!");

        $('.btn-yes').prop("disabled", true);
        $('.btn-no').prop("disabled", true);
        startConfetti();
        setTimeout( 
            function() {
                stopConfetti();
                $('.btn-yes').prop("disabled", false);
                $('.btn-no').prop("disabled", false) },
            8000);
    }
}
