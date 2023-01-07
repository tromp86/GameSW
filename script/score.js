'use strict';
let countAll = 0;
let count = 0;
let cps = 0;
let clicks = 1;
let firstLevelAMOUNT = 0;

const appLevel = document.querySelector('.appLevel');

let CliLocal = function(){
  countAll+=clicks;
  localStorage.setItem('number',countAll.toString());
  let clikersScoreStorage = localStorage.getItem('number');
  if (countAll >= 23) {
    let copyCliks = clikersScoreStorage;
    localStorage.setItem('numberAll',copyCliks.toString());    
  }
};

function Clicked() {
  count+=clicks;
  let word = " clicks";
  document.getElementById("clikers").innerHTML = "";
  let clikerCount = document.getElementById("clikers").innerHTML = count+word;
};

function firstLevel() {
    if (count >= 23) {
    clicks+=1
    count-=23
    let word = " clicks";
    let clikerCount = document.getElementById("clikers").innerHTML = count+word;
    firstLevelAMOUNT+=1
    document.getElementById("firstLevel").innerHTML = firstLevelAMOUNT+" level!";
    appLevel.classList.remove('hidden2');
    }
    else {
      appLevel.classList.add('hidden2');
    }
  };
  function deleteItems() {
    localStorage.clear();
    let clikersScoreStorage = localStorage.getItem('numberAll');
    let word = " clicks";
    clikersScore = document.getElementById("clikersScore").innerHTML = clikersScoreStorage+word;
  };
