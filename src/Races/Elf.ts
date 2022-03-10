import Race from './Race';

export default class Elf extends Race {
  public _maxLifePoints: number;
  static _createdRacesInstances = 0; // metodo criado no race 

  constructor(name: string, dexterity: number) {
    super(name, dexterity); // super() chama o construtor da classe pai
    this._maxLifePoints = 99;
    Elf._createdRacesInstances += 1; // incrementa o numero de instancias criadas da classe Elf
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Elf._createdRacesInstances;
  }
}