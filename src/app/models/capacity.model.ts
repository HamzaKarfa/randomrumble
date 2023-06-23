export interface Cost {
  name: string;
  value: number;
  faIcon: string;
}
export interface Capacity {
  id: number;
  name: string;
  color : string;
  btnBootstrapColor : string;
  cost: Cost;
  type: string;
  damage: number;
  faIcon: string;
}
export const initialCapacities: Capacity[] = [
  { id: 1, name: "Coup de poing", color: "red", btnBootstrapColor:"btn-danger" , cost: { name: "mana", value: 10, faIcon: "fa-solid fa-fire-alt fa-bounce" }, damage: -10 , type: "attack", faIcon: "fa-solid fa-fist-raised fa-bounce" },
  { id: 2, name: "Coup de pied", color: "red", btnBootstrapColor:"btn-danger", cost: { name: "mana", value: 20, faIcon: "fa-solid fa-fire-alt fa-bounce" }, damage: -20 , type: "attack", faIcon: "fa-solid fa-shoe-prints fa-bounce" },
  { id: 4, name: "Soin", color: "green", cost: { name: "mana", value: 10, faIcon: "fa-solid fa-fire-alt fa-bounce" }, damage: 10 , type: "heal", btnBootstrapColor:"btn-success", faIcon: "fa-solid fa-briefcase-medical fa-bounce"},
  { id: 5, name: "Soin de groupe", color: "green", cost: { name: "mana", value: 20, faIcon: "fa-solid fa-fire-alt fa-bounce" }, damage: 20 , type: "heal", btnBootstrapColor:"btn-success" , faIcon: "fa-solid fa-briefcase-medical fa-bounce" },
  { id: 6, name: "Regain de mana", color: "blue", cost: { name: "mana", value: 10, faIcon: "fa-solid fa-heart fa-bounce" }, damage: 10 , type: "mana", btnBootstrapColor:"btn-primary", faIcon: "fa-solid fa-fire-alt fa-bounce"},
  { id: 7, name: "Regain de mana de groupe", color: "blue", cost: { name: "pv", value: 20, faIcon: "fa-solid fa-heart fa-bounce" }, damage: 20 , type: "mana", btnBootstrapColor:"btn-primary", faIcon: "fa-solid fa-fire-alt fa-bounce"},
  { id: 8, name: "Bouclier", color: "yellow", cost: { name: "mana", value: 10, faIcon: "fa-solid fa-fire-alt fa-bounce" }, damage: 10 , type: "shield", btnBootstrapColor:"btn-warning", faIcon: "fa-solid fa-shield fa-bounce"},
];
