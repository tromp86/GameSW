"use strict";
class NewGameSW {
  constructor() {
    this.news = "";
    this.actions = [];
  }

  setNews(text) {
    this.news = text;
    this.notifyAll();
  }

  notifyAll() {
    return this.actions.forEach((subs) => subs.inform(this));
  }

  register(observer) {
    this.actions.push(observer);
  }

  unregister(observer) {
    this.actions = this.actions.filter((el) => !(el instanceof observer));
  }
}
class MyPersonObivan {
  inform(message) {
    console.log(`%c${message.news}`, 'color: red; font-size: 1.2rem');
  }
}

class GoomMonster {
  inform(message) {
    console.log(`i'm a monster Goom and i want to say: ${message.news}`);
  }
}
class MonsterosoMonster {
  inform(message) {
    console.log(
      `i'm a monster Monsteroso listen to me carefully: ${message.news}`
    );
  }
}
class RorggMonster {
  inform(message) {
    console.log(`i'm a monster Rorgg and i control your fear: ${message.news}`);
  }
}
class SporrMonster {
  inform(message) {
    console.log(`i'm a monster Sporr and i want to say: ${message.news}`);
  }
}
class ZzutakMonster {
  inform(message) {
    console.log(`i'm a monster Zzutak listen to me carefully: ${message.news}`);
  }
}
class MiclasMonster {
  inform(message) {
    console.log(
      `i'm a monster Miclas and i control your fear: ${message.news}`
    );
  }
}

const myPersonObivan = new NewGameSW();
myPersonObivan.register(new MyPersonObivan());

const goomMonster = new NewGameSW();
goomMonster.register(new GoomMonster());
goomMonster.setNews(
  "Ive been waiting for you, Obi-Wan. We finally meet again. The circle is now complete."
);

const monsterosoMonster = new NewGameSW();
monsterosoMonster.register(new MonsterosoMonster());

const rorggMonster = new NewGameSW();
rorggMonster.register(new RorggMonster());

const sporrMonster = new NewGameSW();
sporrMonster.register(new SporrMonster());

const zzutakMonster = new NewGameSW();
zzutakMonster.register(new ZzutakMonster());

const miclasMonster = new NewGameSW();
miclasMonster.register(new MiclasMonster());

