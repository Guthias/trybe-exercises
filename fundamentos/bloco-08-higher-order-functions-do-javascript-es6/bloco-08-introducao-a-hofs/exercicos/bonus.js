const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonAttack = () => {
  const damage = Math.round(Math.random() * dragon.strength);
  return damage > 15 ? damage : 15;
}

const warriorAttack = () => Math.round((Math.random() * warrior.weaponDmg) * warrior.strength);

const mageAttack = () => {
  const damage = Math.round((Math.random() * 2) * mage.intelligence)
  if (mage.mana < 15) console.log('Não possui mana o suficiente');

  return {
    damage: mage.mana >= 15 ? damage : 0,
    mana: mage.mana >= 15 ? mage.mana - 15 : mage.mana,
  }
}

const gameActions = {
  warriorTurn: (warriorAttack) => {
    const warriorDamage = warriorAttack();
    warrior.damage = warriorDamage;
    dragon.healthPoints -= warriorDamage;
  },

  mageTurn: (mageAttack) => {
    const round = mageAttack();
    mage.damage = round.damage;
    mage.mana = round.mana;
    dragon.healthPoints -= round.damage;
  },

  dragonTurn: (dragonAttack) => {
    const damage = dragonAttack();
    dragon.damage = damage;
    warrior.healthPoints -= damage;
    mage.healthPoints -= damage;
  },

  turnResult: () => console.log(battleMembers)
}

gameActions.warriorTurn(warriorAttack);
gameActions.mageTurn(mageAttack);
gameActions.dragonTurn(dragonAttack);
gameActions.turnResult();