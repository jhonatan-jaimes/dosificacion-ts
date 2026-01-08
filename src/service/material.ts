import { Recurso, table } from "../utils";
import { concreto, mortero } from "./dosificacion";

export class Material {
  calcular(area: number, dosi: string, tipo: string){
    const tabla = table(dosi, tipo);
    if (tipo == Recurso.CONCRETO){
      return concreto(tabla, area, tipo);
    } else if (tipo == Recurso.MORTERO){
      return mortero(tabla, area, tipo);
    } else {
      throw new Error("No se encontro el tipo");
    }
  }
}