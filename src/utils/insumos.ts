export interface Dosificacion {
  getMaterial(): any;
}

export class Mortar implements Dosificacion {
  private type:    string;
  private cement:  number;
  private sand:    number;
  private water:   number;

  constructor(
    type:          string, 
    cemento:       number, 
    sand:          number, 
    water:         number
  ) {
    this.type =    type;
    this.cement =  cemento;
    this.sand =    sand;
    this.water =   water;
  }
  getMaterial(): any {
    return this;
  }

  getType(): string {
    return this.type;
  }

  getCement(): number {
    return this.cement;
  }

  getSand(): number {
    return this.sand;
  }

  getWater(): number {
    return this.water;
  }

  setType(type: string): void {
    this.type = type;
  }

  setCement(cement: number): void {
    this.cement = cement;
  }

  setSand(sand: number): void {
    this.sand = sand;
  }

  setWater(water: number): void {
    this.water = water;
  }
  
}

export class Concrete extends Mortar {
  private gravel: number;

  constructor(
    type:         string,
    cement:       number,
    sand:         number,
    gravel:       number,
    water:        number
  ) {
    super(type, cement, sand, water);
    this.gravel = gravel;
  }

  getGravel(): number {
    return this.gravel;
  }

  setGravel(gravel: number): void {
    this.gravel = gravel;
  }
}
