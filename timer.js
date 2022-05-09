var audio = new Audio("midas.mp3");

document.onclick = function() {
  audio.play();
}

var countDownDate = new Date("May 20, 2022 00:00:00").getTime();

var abc = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(abc);
        document.getElementById("timer").innerHTML = "EXPIRED";
    }
}, 1000);