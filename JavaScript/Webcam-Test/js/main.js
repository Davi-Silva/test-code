window.onload = init;

function init() {
    let video = document.querySelector("#video");
    navigator.mediaDevices.getUserMedia({ audio: false, video: true }).then(function (stream) {
        video.srcObject = stream;
        video.play();
    }).catch(function (err) {
        alert("Something went wrong: " + err);
    });
}
