import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints: number;
  static _createdRacesInstances = 0; // metodo criado no race 

  constructor(name: string, dexterity: number) {
    super(name, dexterity); // super() chama o construtor da classe pai
    this._maxLifePoints = 99;
    Dwarf._createdRacesInstances += 1; // incrementa o numero de instancias criadas da classe Dwarf
  }

  get maxLifePoints(): number {
    return this.maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Dwarf._createdRacesInstances;
  }
}
