var myAudio = document.getElementById("myAudio");

function toggleAudio() { 
  if(myAudio.paused) {
    myAudio.play(); 
  } else {
    myAudio.pause(); 
    myAudio.currentTime = 0;
  }
}