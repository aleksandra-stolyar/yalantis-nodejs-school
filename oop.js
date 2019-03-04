class Gamer {
  constructor(name, typeOfAttack, hp) {
    const Min = 1;
    const Max = 10;
    this.name = name;
    this.typeOfAttack = typeOfAttack;
    this.hp = hp;
  }

  attack() {
    var min = Math.ceil(this.Min);
    var max = Math.floor(this.Max);
    var result = Math.floor(Math.random() * (max - min)) + min;
    return result;
  }
}

class Monster extends Gamer {
  constructor(name, typeOfAttack, hp) {
    super(name, typeOfAttack, hp);
  }

  attack1() {
    return super.attack();
    console.log('This is Monster attack!');
  }
}

class Gladiator extends Gamer {
  constructor(name, typeOfAttack, hp) {
    super(name, typeOfAttack, hp);
  }

  attack2() {
    return super.attack();
    console.log('This is Gladiator attack!');
  }
}

class Game {
  constructor(gamer1, gamer2) {
    this.gamer1 = gamer1;
    this.gamer2 = gamer2;
    this.gamer1AttackType = this.gamer1.typeOfAttack;
    this.gamer2AttackType = this.gamer2.typeOfAttack;
    this.winner = {};
  }

  start() {
    var gamer1Attack = this.gamer1[this.gamer1AttackType]();
    var gamer2Attack = this.gamer2[this.gamer2AttackType]();

    var gamer1HpLeft = this.gamer1.hp - gamer2Attack;
    var gamer2HpLeft = this.gamer2.hp - gamer1Attack;

    this.winner = ((gamer1HpLeft < gamer2HpLeft) ? this.gamer2.name : this.gamer1.name);
  }
}

const gladiator = new Gladiator('Локи', 'attack2', 9);
const monster = new Monster('Халк', 'attack1', 12);
const game = new Game(gladiator, monster);

game.start();
console.log(game.winner);