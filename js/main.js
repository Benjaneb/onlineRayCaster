"using strict";

let playGame = true;

function toggleControls() {
    document.querySelector(".controls").classList.toggle("hide");
    if(playGame) {
        playGame = false;
    } else {
        playGame = true;
    }
}

function checkUser() {
    if(JSON.parse(localStorage.getItem("newUser")) === null){
        document.querySelector(".new-user").classList.toggle("hide");
        playGame = false;
        localStorage.setItem("newUser", new Boolean(false));
    }
}

function toggleNewUser() {
    document.querySelector(".new-user").classList.toggle("hide");
    if(playGame) {
        playGame = false;
    } else {
        playGame = true;
    }
}