var video = document.getElementById("hero-video");

function vidplay() {
  var button = document.getElementById("play-btn");
  if (video.paused) {
    video.play();
    document.getElementById('play-status').src='assets/icons/pause.svg';
    document.getElementById('play-btn').title='pause';
  } else {
    video.pause();
    document.getElementById('play-status').src='assets/icons/play.svg'
    document.getElementById('play-btn').title='play';
  }
}

function restart() {
  video.currentTime = 0;
}

function forward(value) {
  video.currentTime += value;
}

function backward(value) {
  video.currentTime -= value;
}
function mute() {
  if(video.muted) {
    video.muted = false;
    document.getElementById('mute-status').src='assets/icons/unmute.svg';
    document.getElementById('mute-control').title='mute audio';
  }
  else{
    video.muted = true;
    document.getElementById('mute-status').src='assets/icons/mute.svg';
    document.getElementById('mute-control').title='unmute audio';
  }

}
document.getElementById('play-btn').addEventListener('click', ()=>{
  vidplay();
});

document.getElementById('loop-btn').addEventListener('click', ()=>{
  restart();
});

document.getElementById('forward-btn').addEventListener('click', ()=>{
  forward(4);
});

document.getElementById('backward-btn').addEventListener('click', ()=>{
  backward(4);
});

document.getElementById('mute-control').addEventListener('click', ()=>{
  mute();
});
