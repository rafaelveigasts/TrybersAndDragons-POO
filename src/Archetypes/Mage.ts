import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Mage extends Archetype {
  private _energyType: EnergyType;
  static _createdArchetypeInstances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage._createdArchetypeInstances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Mage._createdArchetypeInstances;
  }
}

// o método createdArchetypeInstances deve retornar o número correto de instâncias criadas da classe Mage, isso vai acontecer toda vez que a classe for criada, sendo assim ele deve estar no constructor da classe Mage, ou seja a classe chama o próprio método, por isso o Mage._createdArchetypeInstances.