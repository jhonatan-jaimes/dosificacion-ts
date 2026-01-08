import { Concreto } from "../utils";
import { Dosificacion, Mortero } from "../utils/insumos";

export function mortero(table: Dosificacion, area: number, tipo: string){
  const cemento = area * table.getMaterial().getCemento();
  const arena =   area * table.getMaterial().getArena();
  const agua =    area * table.getMaterial().getAgua();
  return new Mortero(tipo, cemento, arena, agua);
}

export function concreto(table: Dosificacion, area: number, tipo: string){
  const morte = mortero(table, area, tipo);
  const grava = area * table.getMaterial().getGrava();
  return new Concreto(tipo, morte.getCemento(), morte.getArena(), grava, morte.getAgua());
}