'use strict';

// Добавил проект на ноут//

window.onload = function () {
    var slides = document.querySelectorAll('#slides .slide');
    var currentSlide = 0;
    var slideInterval = setInterval(nextSlide, 2000);
    var playing = true;
    var pauseButton = document.getElementById('pause');
    var next = document.getElementById('next');
    var previous = document.getElementById('previous');

    function displayFile(sv) {
        var tempName = sv.innerHTML;
        tempName = tempName.slice(tempName.indexOf('"') + 1);
        tempName = tempName.slice(0, tempName.lastIndexOf('"'));
        document.getElementById('fileName').innerHTML = tempName;

    }

    function nextSlide() {
        slides[currentSlide].className = 'slide';
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].className = 'slide showing';
        displayFile(slides[currentSlide]);
    };


    function pauseSlideshow() {
        // var button = document.getElementById("pause");
        // var style = button[].style;
        // style.backgroundImage  = "url('pic/play.png')";
        pauseButton.style.backgroundImage = 'url("pic/play.png")';
        // image.src='pic/play.png';
        pauseButton.title = 'Play';
        // pauseButton.innerHTML = 'Play';
        console.log(pauseButton);
        playing = false;
        clearInterval(slideInterval);
    };

    function playSlideshow() {
        // var image=document.getElementById("pause");
        // image.src='pic/pause.png';
        pauseButton.style.backgroundImage = 'url("pic/pause.png")';
        pauseButton.title = 'Pause';
        // pauseButton.innerHTML = 'Pause';
        playing = true;
        slideInterval = setInterval(nextSlide, 2000);
    };

    pause.onclick = function () {
        if (playing) {
            pauseSlideshow();
        } else {
            playSlideshow();
        }
    };

    function nextSlide() {
        goToSlide(currentSlide + 1);
    };

    function previousSlide() {
        goToSlide(currentSlide - 1);
    };

    function goToSlide(n) {
        slides[currentSlide].className = 'slide';
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].className = 'slide showing';
        displayFile(slides[currentSlide]);
    };

    next.onclick = function () {
        pauseSlideshow();
        nextSlide();
    };
    previous.onclick = function () {
        pauseSlideshow();
        previousSlide();
    };

};
