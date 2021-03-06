"use strict";

const NUM_OF_FLOWER_PICS = 30 - 1;

window.scroll(0, 1); // Android: Hide address bar

var timeoutId = 0;
function doTimerHandling(timeoutMillisec) {

    if (timeoutId != 0) {
        clearTimeout(timeoutId);
    }
    timeoutId = setTimeout( 
        function() {
            $('.content').text("Hattest Du heute schon Blumen?"); 
            timeoutId = 0;
        }, timeoutMillisec );
}

function doRandomPics() {
    var picPath = "url(pics/flowers/" + Math.floor(Math.random() * NUM_OF_FLOWER_PICS).toString() + ".PNG)";
    $('.frame').css("background", picPath);
    $('.frame').css("background-size", "cover");
}

$('.btn-no').click(
function() {
    $('.content').text("Bitte schön!");
    doRandomPics();
    doTimerHandling(5000);
});

$('.btn-yes').click(
function() {
    $('.content').text("... dann bekommst Du eben nochmal welche :)");
    doRandomPics();
    doTimerHandling(5000);
});

function onClick() {
    // feature detect
    if (typeof DeviceMotionEvent.requestPermission === 'function') {
        DeviceMotionEvent.requestPermission()
            .then(permissionState => {
                if (permissionState === 'granted') {
                    window.addEventListener('devicemotion', () => {});
                }
            }) 
            .catch(error)(console.error(error));
        } else {
        alert("Schade");
    }
}

window.onload = function() {

    var elems = document.getElementsByTagName('header');
    elems[0].onclick = onClick;

    var myShakeEvent = new Shake({
        threshold: 15, // optional shake strength threshold
        timeout: 1000 // optional, determines the frequency of event generation
    });
    myShakeEvent.start();

    window.addEventListener('shake', shakeEventDidOccur, false);
    
    function shakeEventDidOccur() {
        $('.frame').css("background", "url(pics/torte.png)");
        $('.frame').css("background-size", "cover");
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
        doTimerHandling(8000);
    }
}
