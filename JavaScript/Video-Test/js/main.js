let vid, videoTime, rewind, fastForward, playPauseBtn, muteBtn;

playPauseBtn = document.querySelector("#playPause");
vid = document.querySelector("#player");
videoTime = document.querySelector("#videoTime");
muteBtn = document.querySelector("#mute");
rewind = document.querySelector("#rewind");
fastForward = document.querySelector("#fastForward");

playPauseBtn.addEventListener('click', function playVideo() {
    if (playPauseBtn.className === "fas fa-pause") {
        vid.pause();
        playPauseBtn.className = "fas fa-play";
    } else if (playPauseBtn.className === "fas fa-play") {
        vid.play();
        playPauseBtn.className = "fas fa-pause";
    }
});

vid.addEventListener('canplaythrough', function () {
    vid.play();
}, false);

vid.addEventListener('mouseover', function () {
    vid.style.filter = "grayscale(100%)";
    vid.style.transition = "all .4s ease-in-out"
});

vid.addEventListener('mouseout', function () {
    vid.style.filter = "grayscale(0%)";
    vid.style.transition = "all .4s ease-in-out"
});

rewind.addEventListener('click', function () {
    vid.currentTime -= 5;
});


fastForward.addEventListener('click', function () {
    vid.currentTime += 5;
});

muteBtn.addEventListener('click', function () {
    if (muteBtn.className === "fas fa-volume-off") {
        vid.muted = false;
        muteBtn.className = "fas fa-volume-up";
    } else if (muteBtn.className === "fas fa-volume-up") {
        vid.muted = true;
        muteBtn.className = "fas fa-volume-off";
    }
});