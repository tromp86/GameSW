"use strict";

const myVid = document.getElementById("audio");
myVid.volume = 0.40;
myVid.loop=true;

document.querySelector('#mute').addEventListener('click', () => {
    audio.muted = audio.muted == false ? true : false;
  });
document.onclick = () => audio.play();
play.onclick = () => {
   audio.play();
   audio.loop; 
};


class Monster{
  constructor(type, liveHp) {
      this.type = type;
      this.liveHp = liveHp;
  }
};
class MonsterFactory {
  create(type) {
      if (type === 'Goom')
      return new Monster(type, '98%');
      if (type === 'Monsteroso')
      return new Monster(type, '97%');
      if (type === 'Rorgg')
      return new Monster(type, '95%');
      if (type === 'Sporr')
      return new Monster(type, '99%');
      if (type === 'Zzutak')
      return new Monster(type, '94%');
      if (type === 'Miclas')
      return new Monster(type, '100%');
  }
};
const factory = new MonsterFactory();

const Goom = factory.create('Goom');
const Monsteroso = factory.create('Monsteroso');
const Rorgg = factory.create('Rorgg');
const Sporr = factory.create('Sporr');
const Zzutak = factory.create('Zzutak');
const Miclas = factory.create('Miclas');


const randomMonster = () => {
  const code = [];
  code.push(Goom.liveHp, Monsteroso.liveHp, Rorgg.liveHp, Sporr.liveHp, Zzutak.liveHp, Miclas.liveHp);
  let rand = Math.floor(Math.random() * code.length);
  return code[rand];
};

const goom = document.getElementById('Goom');
const monsteroso = document.getElementById('Monsteroso');
const rorgg = document.getElementById('Rorgg');
const sporr = document.getElementById('Sporr'); 
const zzutak = document.getElementById('Zzutak'); 
const miclas = document.getElementById('Miclas'); 

function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const live1 = document.querySelector('.loadlive');
live1.style.width = randomMonster();
const loadtext = document.getElementById('loadtext');
document.getElementById('loadtext').textContent = randomMonster();
const wraplive = document.querySelector('.wraplive');
const wraplivePlayer = document.querySelector('.wraplivePlayer');
function soundClick() {
  let audio = new Audio(); 
  audio.src = './sound/katana swing.wav'; 
  audio.autoplay = true; 
}
const newGame = function() {
  const newGame = document.createElement('button');
  newGame.id = 'content';
  newGame.innerHTML = '<a href="./index.html">Let`s play a new game</a>';
document.body.appendChild(newGame);
}
// ____attackMonster
function attackMonsterGoom () {
  const forest = document.querySelector('#forest-wrap');
  forest.classList.add('forest-1');
  soundClick();
    let count = parseInt(live1.style.width);
    count -= getRandomValue(1, 5);
    count -= clicks;
    live1.style.width = `${count}%`;
    loadtext.textContent = `${count}%`;
    if(live1.style.width <= `${25}%`){
      loadtext.style.visibility = 'hidden';
    };
    if ( count <= 0 ) {
      vush.play();
      live1.style.width = randomMonster(); 
      attackMonsterMonsteroso();
goom.classList.add('hidden');
goom.removeEventListener('click', attackMonsterGoom);
goom.removeEventListener('click', attackPlayer);
goom.remove();
    } else {
    loadtext.textContent = `${count}%`;
        }
      }      
goom.addEventListener('click', attackMonsterGoom);


const live2 = document.querySelector('.loadlive');
live2.style.width = randomMonster();
// 2____attackMonsterMonsteroso
function attackMonsterMonsteroso () {
  const forest = document.querySelector('#forest-wrap');
  forest.classList.remove('forest-1');
  forest.classList.add('forest-2');
loadtext.style.visibility = 'visible';
monsteroso.classList.remove('hidden');
soundClick();
  let count = parseInt(live2.style.width);
  count -= getRandomValue(1, 4);
  count -= clicks;
  live2.style.width = `${count}%`;
  if(live2.style.width <= `${25}%`){
    loadtext.style.visibility = 'hidden';
  }
  if (count < 10) {
    loadtext.style.visibility = 'hidden';
  };
  if  (count <= 0 ) {
    vush.play();
    live2.style.width = randomMonster(); 
    attackMonsterRorgg();
monsteroso.classList.add('hidden');
monsteroso.removeEventListener('click', attackMonsterMonsteroso);
monsteroso.removeEventListener('click', attackPlayer);
monsteroso.remove();  
  } else {
    loadtext.textContent = `${count}%`;
      }
    }; 
monsteroso.addEventListener('click', attackMonsterMonsteroso); 


const live3 = document.querySelector('.loadlive');
live3.style.width = randomMonster();
// 3____attackMonsterRorgg
function attackMonsterRorgg () {
const forest = document.querySelector('#forest-wrap');
forest.classList.remove('forest-2');
forest.classList.add('forest-3');
loadtext.style.visibility = 'visible';
rorgg.classList.remove('hidden');
soundClick();
  let count = parseInt(live3.style.width);
  count -= getRandomValue(1, 3);
  count -= clicks;
  live3.style.width = `${count}%`; 
  loadtext.textContent = `${count}%`;
  if(live3.style.width <= `${25}%`){
    loadtext.style.visibility = 'hidden';
  };
  if (count < 10) {
    loadtext.style.visibility = 'hidden';
  }
  if ( count <= 0 ) {
    vush.play();
    live3.style.width = randomMonster();
    attackMonsterSporr(); 
rorgg.classList.add('hidden');
rorgg.removeEventListener('click', attackMonsterRorgg);
rorgg.removeEventListener('click', attackPlayer);
rorgg.remove();    
  } else {
    loadtext.textContent = `${count}%`;
      }
    } 
rorgg.addEventListener('click', attackMonsterRorgg);  


const live4 = document.querySelector('.loadlive');
live4.style.width = randomMonster();
// 4____attackMonsterSporr
function attackMonsterSporr () {
  const forest = document.querySelector('#forest-wrap');
forest.classList.remove('forest-3');
forest.classList.add('forest-4');
loadtext.style.visibility = 'visible';
sporr.classList.remove('hidden');
soundClick();
  let count = parseInt(live4.style.width);
  count -= getRandomValue(1, 2);
  count -= clicks;
  live4.style.width = `${count}%`; 
  if(live4.style.width <= `${25}%`){
    loadtext.style.visibility = 'hidden';
  };
  if (count < 10) {
    loadtext.style.visibility = 'hidden';
  }
  if ( count <= 0 ) {
    vush.play();
    live4.style.width = randomMonster();
    attackMonsterZzutak();
    sporr.classList.add('hidden');
sporr.removeEventListener('click', attackMonsterSporr);
sporr.removeEventListener('click', attackPlayer);
sporr.remove();    
  } else {
    loadtext.textContent = `${count}%`;
      }
    } 
sporr.addEventListener('click', attackMonsterSporr); 


const live5 = document.querySelector('.loadlive');
live5.style.width = randomMonster();
// 5____attackMonsterZzutak
function attackMonsterZzutak () {
  const forest = document.querySelector('#forest-wrap');
forest.classList.remove('forest-4');
forest.classList.add('forest-5');
loadtext.style.visibility = 'visible';
zzutak.classList.remove('hidden');
soundClick();
  let count = parseInt(live5.style.width);
  count -= getRandomValue(1, 1);
  count -= clicks;
  live5.style.width = `${count}%`; 
  if(live5.style.width <= `${25}%`){
    loadtext.style.visibility = 'hidden';
  };
  if (count < 10) {
    loadtext.style.visibility = 'hidden';
  }
  if ( count <= 0 ) {
    aga.play();
    vush.play();
    live5.style.width = randomMonster();
    attackMonsterMiclas();
    zzutak.classList.add('hidden');
zzutak.removeEventListener('click', attackMonsterZzutak);
zzutak.removeEventListener('click', attackPlayer);
zzutak.remove();    
  } else {
    loadtext.textContent = `${count}%`;
      }
    } 
zzutak.addEventListener('click', attackMonsterZzutak); 


const live6 = document.querySelector('.loadlive');
live6.style.width = randomMonster();
// 6____attackMonsterZzutak
function attackMonsterMiclas () {
const forest = document.querySelector('#forest-wrap');
forest.classList.remove('forest-5');
forest.classList.add('forest-6');
loadtext.style.visibility = 'visible';
miclas.classList.remove('hidden');
let containerLoadlive6 = document.getElementsByTagName('section')[1];
containerLoadlive6.classList.remove('container');
containerLoadlive6.classList.add('container-loadlive6');
live6.classList.remove('loadlive');
live6.classList.add('loadlive6');
soundClick();
  let count = parseInt(live6.style.width);
  count -= getRandomValue(1, 1);
  count -= clicks;
  live6.style.width = `${count}%`; 
  if(live6.style.width <= `${50}%`){
    const body = document.querySelector('body');
    body.classList.add('forest-6-fire');
    loadtext.style.visibility = 'hidden';
  };
  if (count < 10) {
    loadtext.style.visibility = 'hidden';
  }
  if ( count <= 0 ) {
    newGame();
    myVid.volume = 0.00;
    wine.play();
    miclas.classList.add('hidden');
    wraplive.classList.add('hidden');
    const body = document.querySelector('body');
    body.classList.remove('forest-6-fire');
    game.classList.remove('hidden');
    let text = document.querySelector(".center").textContent;
    document.querySelector(".center").textContent = "Congratulations, you have won this battle.";
    clearInterval(timerID);
    wraplivePlayer.classList.add('hidden');
miclas.removeEventListener('click', attackMonsterMiclas);
miclas.removeEventListener('click', attackPlayer);
miclas.remove();    
  } else {
    loadtext.textContent = `${count}%`;
      }
    } 
miclas.addEventListener('click', attackMonsterMiclas); 


const hp = document.getElementById('hp');
hp.style.width = '100%';
const hpPrecent = document.getElementById('hpPrecent');
const game = document.querySelector('.game');

document.querySelector('#hp').addEventListener('contextmenu',function(){
  document.oncontextmenu = function(event) {
    hp.classList.remove('hover');
    app.removeChild(app.lastChild);  
    if (app.lastChild == null){
console.log('no hearts');
    }
function getLive (){
  function soundClick() {
    let audio = new Audio(); 
    audio.src = './sound/likehp.wav'; 
    audio.autoplay = true; 
  }
  soundClick();
  let countLiveHp = parseInt(hp.style.width);
  countLiveHp += getRandomValue(14, 28);
  hp.style.width = `${countLiveHp}%`;
  event.preventDefault();
}
  getLive();
};
});


function attackPlayer () {
  let count = parseInt(hp.style.width);
  count -= getRandomValue(1, 8);
  hp.style.width = `${count}%`;
  if ( count <= 0 ) {
    newGame();
    myVid.volume = 0.00;
    over.play();
    clearInterval(timerID);
    wraplivePlayer.classList.add('hidden');
    const game = document.querySelector('.game');
    game.classList.remove('hidden');
    wraplive.classList.add('hidden');
    let text = document.querySelector(".center").textContent;
    document.querySelector(".center").textContent = "Game Over";
  } else {
    hpPrecent.textContent = `${count}%`;
  }
}
goom.addEventListener('click', attackPlayer);
monsteroso.addEventListener('click', attackPlayer);
rorgg.addEventListener('click', attackPlayer);
sporr.addEventListener('click', attackPlayer); 
zzutak.addEventListener('click', attackPlayer); 
miclas.addEventListener('click', attackPlayer); 


const app = document.querySelector('.app');

let timerHeart = () => {
    const image = document.createElement('img');
    image.src  = './img-monsters/Heart.png'
    image.classList.add('heart');
    function soundClick() {
      let audio = new Audio(); 
      audio.src = './sound/click.wav';
      audio.autoplay = true; 
    }
    soundClick();
app.appendChild(image);
}
const lastImage = document.getElementsByTagName('heart');
let cornerLastImage = lastImage.lastChild;

let counter = 0;
function timerId() {
  counter++;
  timerHeart();
    if (counter === 11) {
        clearInterval(timerID);
      } 
}
let timerID = setInterval(timerId, 8234);
