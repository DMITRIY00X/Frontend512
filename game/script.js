"use strict";
let start = document.querySelector("#start");
let game = document.querySelector("#game");

start.addEventListener("click", startGame);
game.addEventListener("click", handleBoxClick);

function startGame() {
    start.classList.add("hide");
    game.style.background = "#fff";

    renderBox();
}

function renderBox() {
    let box = document.createElement("div");

    box.style.width = box.style.height = "50px";
    box.style.background = "#000";
    box.style.position = "absolute";
    box.style.left = "70px";
    box.style.top = "50px";
    box.style.cursor = "pointer";
    box.setAttribute("data-box", "true");



    game.insertAdjacentElement("afterbegin", box);

}

function handleBoxClick(event) {
    if (event.target.dataset.box) {
        renderBox();
    }

}
