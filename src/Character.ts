import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(
    name: string,
    race: Race = new Elf(name, 10),
    archetype: Archetype = new Mage(name),
  ) {
    this._race = race;
    this._archetype = archetype;
    this._maxLifePoints = race.maxLifePoints / 2;
    this._lifePoints = race.maxLifePoints;
    this._strength = getRandomInt(1, 99);
    this._defense = getRandomInt(1, 99);
    this._dexterity = race.dexterity;
    this._energy = {
      type_: archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get energy(): Energy {
    return { type_: this._energy.type_, amount: this._energy.amount };
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;

    if (damage > 0) {
      this._lifePoints -= attackPoints;
    }

    if (this._lifePoints < 0) {
      this._lifePoints = -1;
    }

    return this._lifePoints;
  }

  attack(enemy: Fighter) {
    const damage = this._strength;
    enemy.receiveDamage(damage);
  }

  levelUp() {
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;
    if (this._maxLifePoints > this._race.maxLifePoints) {
      return this._race.maxLifePoints;
    }
    this._lifePoints += getRandomInt(1, 10);
  }

  special(enemy: Fighter): void {
    const damage = this._strength;
    enemy.receiveDamage(damage);
  }
}
