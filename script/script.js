"use strict";

const hover = (event) => {
  if (event.target.tagName === 'DIV'){
    klikMenu.play();
  }
};
box.addEventListener('mouseover', hover);


const modalWindow = document.querySelector(".modal-window");
const overlay = document.querySelector(".overlay");
const btnCloseModalWindow = document.querySelector(".close-modal-window");
const btnShowModalWindow = document.querySelector(".show-modal-window");
let clikersScore = document.querySelector("clikersScore");

let clikersScoreStorage = localStorage.getItem('number');
  console.log(clikersScoreStorage);


const showMadalWindow = function () {
  let clikersScoreStorage = localStorage.getItem('numberAll');
  let word = " clicks";
  clikersScore = document.getElementById("clikersScore").innerHTML = clikersScoreStorage+word;
  modalWindow.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const closeMadalWindow = function () {
  modalWindow.classList.add("hidden");
  overlay.classList.add("hidden");
};
btnShowModalWindow.addEventListener("click", showMadalWindow);

btnCloseModalWindow.addEventListener("click", closeMadalWindow);
overlay.addEventListener("click", closeMadalWindow);
