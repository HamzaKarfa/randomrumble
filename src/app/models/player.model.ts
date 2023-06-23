import { Capacity } from "./capacity.model";

export interface IPlayer {
  id: number;
  avatar: string;
  name: string;
  pv: number;
  pvMax: number;
  mana: number;
  manaMax: number;
  capacities: Capacity[];
}
export const initialPlayers: IPlayer[] = []; //init player with dispatch action in app.component.ts


export abstract class Player implements IPlayer {
  id: number;
  avatar: string;
  name: string;
  pv: number;
  pvMax: number;
  mana: number;
  abstract type: string;
  manaMax: number;
  capacities: Capacity[];

  constructor(id: number, avatar: string, name: string, pv: number, pvMax: number, mana: number, manaMax: number, capacities: Capacity[]) {
    this.id = id;
    this.avatar = avatar;
    this.name = name;
    this.pv = pv;
    this.pvMax = pvMax;
    this.mana = mana;
    this.manaMax = manaMax;
    this.capacities = capacities;
  }
}


export class Warrior extends Player {
  type = "Warrior";
  constructor(id: number, avatar: string, name: string, pv: number, pvMax: number, mana: number, manaMax: number, capacities: Capacity[]) {
    super(id, avatar, name, pv, pvMax, mana, manaMax, capacities);
  }
}

export class Mage extends Player {
  type = "Mage";
  constructor(id: number, avatar: string, name: string, pv: number, pvMax: number, mana: number, manaMax: number, capacities: Capacity[]) {
    super(id, avatar, name, pv, pvMax, mana, manaMax, capacities);
  }
}

export class Healer extends Player {
  type = "Healer";
  constructor(id: number, avatar: string, name: string, pv: number, pvMax: number, mana: number, manaMax: number, capacities: Capacity[]) {
    super(id, avatar, name, pv, pvMax, mana, manaMax, capacities);
  }
}

export class Tank extends Player {
  type = "Tank";
  constructor(id: number, avatar: string, name: string, pv: number, pvMax: number, mana: number, manaMax: number, capacities: Capacity[]) {
    super(id, avatar, name, pv, pvMax, mana, manaMax, capacities);
  }
}
