import { faker } from '@faker-js/faker';
import { Injectable } from '@angular/core';
import { Healer, IPlayer, Mage, Tank, Warrior } from 'src/app/models/player.model';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor() { }

  createPlayer(type: string): IPlayer {
    switch (type) {
      case "Warrior":
        return new Warrior(1, faker.internet.avatar(), faker.person.firstName(), 100, 100, 30, 30, [
          { id: 1, name: "Coup de poing", color: "red", btnBootstrapColor:"btn-danger" , cost: { name: "mana", value: 10, faIcon: "fa-solid fa-fire-alt fa-bounce" }, damage: -10 , type: "attack", faIcon: "fa-solid fa-fist-raised fa-bounce" },
          { id: 2, name: "Coup de pied", color: "red", btnBootstrapColor:"btn-danger", cost: { name: "mana", value: 20, faIcon: "fa-solid fa-fire-alt fa-bounce" }, damage: -20 , type: "attack", faIcon: "fa-solid fa-shoe-prints fa-bounce" },
          { id: 6, name: "Regain de mana", color: "blue", cost: { name: "mana", value: 10, faIcon: "fa-solid fa-heart fa-bounce" }, damage: 10 , type: "mana", btnBootstrapColor:"btn-primary", faIcon: "fa-solid fa-fire-alt fa-bounce"},
        ]);
      case "Mage":
        return new Mage(2, faker.internet.avatar(), faker.person.firstName(), 100, 100, 30, 30, [
          { id: 1, name: "Coup de poing", color: "red", btnBootstrapColor:"btn-danger" , cost: { name: "mana", value: 10, faIcon: "fa-solid fa-fire-alt fa-bounce" }, damage: -10 , type: "attack", faIcon: "fa-solid fa-fist-raised fa-bounce" },
          { id: 6, name: "Regain de mana", color: "blue", cost: { name: "mana", value: 10, faIcon: "fa-solid fa-heart fa-bounce" }, damage: 10 , type: "mana", btnBootstrapColor:"btn-primary", faIcon: "fa-solid fa-fire-alt fa-bounce"},
          { id: 7, name: "Regain de mana de groupe", color: "blue", cost: { name: "pv", value: 20, faIcon: "fa-solid fa-heart fa-bounce" }, damage: 20 , type: "mana", btnBootstrapColor:"btn-primary", faIcon: "fa-solid fa-fire-alt fa-bounce"},
        ]);
      case "Healer":
        return new Healer(3, faker.internet.avatar(), faker.person.firstName(), 100, 100, 30, 30, [
          { id: 1, name: "Coup de poing", color: "red", btnBootstrapColor:"btn-danger" , cost: { name: "mana", value: 10, faIcon: "fa-solid fa-fire-alt fa-bounce" }, damage: -10 , type: "attack", faIcon: "fa-solid fa-fist-raised fa-bounce" },
          { id: 4, name: "Soin", color: "green", cost: { name: "mana", value: 10, faIcon: "fa-solid fa-fire-alt fa-bounce" }, damage: 10 , type: "heal", btnBootstrapColor:"btn-success", faIcon: "fa-solid fa-briefcase-medical fa-bounce"},
          { id: 5, name: "Soin de groupe", color: "green", cost: { name: "mana", value: 20, faIcon: "fa-solid fa-fire-alt fa-bounce" }, damage: 20 , type: "heal", btnBootstrapColor:"btn-success" , faIcon: "fa-solid fa-briefcase-medical fa-bounce" },
      ]);
      case "Tank":
        return new Tank(4, faker.internet.avatar(), faker.person.firstName(), 100, 100, 30, 30, [
          { id: 1, name: "Coup de poing", color: "red", btnBootstrapColor:"btn-danger" , cost: { name: "mana", value: 10, faIcon: "fa-solid fa-fire-alt fa-bounce" }, damage: -10 , type: "attack", faIcon: "fa-solid fa-fist-raised fa-bounce" },
          { id: 2, name: "Coup de pied", color: "red", btnBootstrapColor:"btn-danger", cost: { name: "mana", value: 20, faIcon: "fa-solid fa-fire-alt fa-bounce" }, damage: -20 , type: "attack", faIcon: "fa-solid fa-shoe-prints fa-bounce" },
          { id: 8, name: "Bouclier", color: "yellow", cost: { name: "mana", value: 10, faIcon: "fa-solid fa-fire-alt fa-bounce" }, damage: 10 , type: "shield", btnBootstrapColor:"btn-warning", faIcon: "fa-solid fa-shield fa-bounce"},
        ]);
      default:
        return new Warrior(1, faker.internet.avatar(), faker.person.firstName(), 100, 100, 30, 30, [
          { id: 1, name: "Coup de poing", color: "red", btnBootstrapColor:"btn-danger" , cost: { name: "mana", value: 10, faIcon: "fa-solid fa-fire-alt fa-bounce" }, damage: -10 , type: "attack", faIcon: "fa-solid fa-fist-raised fa-bounce" },
          { id: 2, name: "Coup de pied", color: "red", btnBootstrapColor:"btn-danger", cost: { name: "mana", value: 20, faIcon: "fa-solid fa-fire-alt fa-bounce" }, damage: -20 , type: "attack", faIcon: "fa-solid fa-shoe-prints fa-bounce" },
          { id: 6, name: "Regain de mana", color: "blue", cost: { name: "mana", value: 10, faIcon: "fa-solid fa-heart fa-bounce" }, damage: 10 , type: "mana", btnBootstrapColor:"btn-primary", faIcon: "fa-solid fa-fire-alt fa-bounce"},
        ]);
    }
  }
}
