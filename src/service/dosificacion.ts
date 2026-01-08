import { Concrete, Mortar, Dosificacion, Transform } from "../utils";

function convertirToMili(num: number){
  return Transform.MILIMETROS * num;
}

function convertirToMetr(num: number){
  return num / Transform.MILIMETROS2;
}

export function mortar(table: Mortar, area: number, type: string){
  const cemento = convertirToMetr(convertirToMili(area) * convertirToMili(table.getMaterial().getCement()));
  const arena =   convertirToMetr(convertirToMili(area) * convertirToMili(table.getMaterial().getSand()));
  const agua =    convertirToMetr(convertirToMili(area) * convertirToMili(table.getMaterial().getWater()));
  return new Mortar(type, cemento, arena, agua);
}

export function concrete(table: Concrete, area: number, type: string){
  const morte = mortar(table, area, type);
  const grava = area * table.getMaterial().getGrava();
  return new Concrete(type, morte.getCement(), morte.getSand(), grava, morte.getWater());
}