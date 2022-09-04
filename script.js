const speed = document.querySelector(".speed");
const bar = speed.querySelector(".speed-bar");
const video = document.querySelector(".flex");
let isDown = false;

function speedClickHandler(e) {
    // if mousedown is not true, don't do anything, simply return
    if(!isDown) return; 
    
    // setting y cordinates and how much it is in terms of percent compared to height
    const y = e.pageY - this.offsetTop;
    const percent = y / this.offsetHeight;

    // maximum and minimum speed of playback
    const min = 0.5;
    const max = 4;

    // setting height of the speed bar
    const height = `${Math.round(percent * 100)}%`; 
    bar.style.height = height;

    // setting playbackrate of the video and speed bar text content
    const playbackRate = percent * (max - min) + min;
    bar.textContent = `${playbackRate.toFixed(2)}x`;
    video.playbackRate = playbackRate;

}


speed.addEventListener("mousemove", speedClickHandler);
speed.addEventListener("mousedown" , () => isDown = true);
speed.addEventListener("mouseup" , () => isDown = false);
speed.addEventListener("mouseleave" , () => isDown = false);
