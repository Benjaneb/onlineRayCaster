"using strict";

let playGame = true;

function toggleControls() {
    document.querySelector(".controls-background").classList.toggle("hide");
    if(playGame) {
        playGame = false;
    } else {
        playGame = true;
    }
}