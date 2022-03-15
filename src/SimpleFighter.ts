export default interface SimpleFighter {
  lifePoints: number;
  strength : number;

  attach(enemy: SimpleFighter): void;

  receiveDamage(attackPoints: number): number;
}
