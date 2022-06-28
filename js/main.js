"use strict";

window.scroll(0, 1); /* Android: Hide address bar*/

$('.btn-no').click(
function() {
    var picPath = "url(pics/flowers/" + Math.floor(Math.random() * 19).toString() + ".PNG)";
    //$('.frame').css("background", "url(pics/flowers/001.PNG)");
    $('.frame').css("background", picPath);
    $('.content').text("Bitte schön!");
});

$('.btn-yes').click(
    function() {
        var picPath = "url(pics/flowers/" + Math.floor(Math.random() * 19).toString() + ".PNG)";
        //$('.frame').css("background", "url(pics/flowers/001.PNG)");
        $('.frame').css("background", picPath);
        $('.content').text("Egal, dann bekommst Du eben nochmal welche :)");
    });

window.onload = function() {
    var myShakeEvent = new Shake({
        threshold: 15, // optional shake strength threshold
        timeout: 1000 // optional, determines the frequency of event generation
    });
    myShakeEvent.start();

    window.addEventListener('shake', shakeEventDidOccur, false);
    
    function shakeEventDidOccur() {
        alert("Shake!");
        $('.frame').css("background", "url(pics/torte.png)");
        $('.content').text("HAPPY BIRTHDAY!!!");
    }
}