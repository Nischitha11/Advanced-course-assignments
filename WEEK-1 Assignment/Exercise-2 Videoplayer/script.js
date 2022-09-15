document.addEventListener("DOMContentLoaded", function() {startplayer(); } );


let player;

const video = document.getElementById("video")

function startplayer() {
    player = document.getElementById("video");
   player.controls = false;
}
function play() {
    player.play();
}

function pause() {
    player.pause()
}

function stop(){
    player.pause();
    player.currentTime = 0;
}