import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints: number;
  static _createdRacesInstances = 0; // metodo criado no race 

  constructor(name: string, dexterity: number) {
    super(name, dexterity); // super() chama o construtor da classe pai
    this._maxLifePoints = 99;
    Elf._createdRacesInstances += 1; // incrementa o numero de instancias criadas da classe Elf
  }

  get maxLifePoints(): number {
    return this.maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Elf._createdRacesInstances;
  }
}

const pelegolas = new Elf('Pelegolas', 10);
console.log(pelegolas.name);
console.log(pelegolas.dexterity);
