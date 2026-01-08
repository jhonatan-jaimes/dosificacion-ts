import { Concrete, Mortar, Recurso, table } from "../utils";
import { concrete, mortar } from "./dosificacion";

export class Material {
  calcular(area: number, dosi: string, type: string){
    const tabla = table(dosi, type);
    if (type == Recurso.CONCRETO){
      return concrete(tabla as Concrete, area, type);
    } else if (type == Recurso.MORTERO){
      return mortar(tabla as Mortar, area, type);
    } else {
      throw new Error("Type don't found");
    }
  }
}