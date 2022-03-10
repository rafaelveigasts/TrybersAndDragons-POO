import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints: number;
  static _createdRacesInstances = 0; // metodo criado no race 

  constructor(name: string, dexterity: number) {
    super(name, dexterity); // super() chama o construtor da classe pai
    this._maxLifePoints = 60;
    Halfling._createdRacesInstances += 1; // incrementa o numero de instancias criadas da classe Halfling
  }

  get maxLifePoints(): number {
    return this.maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Halfling._createdRacesInstances;
  }
}

const bilbo = new Halfling('Bilbo', 10);
console.log(bilbo.name);
console.log(bilbo.dexterity);
