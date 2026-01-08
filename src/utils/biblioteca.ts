import { Dosificacion, Mortar, Concrete } from "./insumos";
import { Recurso } from "./constantes";

type Tupla = [string, string, string, string];

const concretoTabla = new Map<Tupla, Concrete>();

concretoTabla.set(["280", "4000", "27", "1:2:2"], new Concrete("", 420, 0.67, 0.67, 190));
concretoTabla.set(["240", "3555", "24", "1:2:2.5"], new Concrete("", 380, 0.60, 0.76, 180));
concretoTabla.set(["226", "3224", "22", "1:2:3"], new Concrete("", 350, 0.55, 0.84, 170));
concretoTabla.set(["210", "3000", "20", "1:2:3.5"], new Concrete("", 320, 0.52, 0.90, 170));
concretoTabla.set(["200", "2850", "19", "1:2:4"], new Concrete("", 300, 0.48, 0.95, 158));
concretoTabla.set(["189", "2700", "18", "1:2.5:4"], new Concrete("", 280, 0.55, 0.89, 158));
concretoTabla.set(["168", "2400", "16", "1:3:3"], new Concrete("", 300, 0.72, 0.72, 158));
concretoTabla.set(["159", "2275", "15", "1:3:4"], new Concrete("", 260, 0.63, 0.83, 163));
concretoTabla.set(["140", "2000", "14", "1:3:5"], new Concrete("", 230, 0.55, 0.92, 148));
concretoTabla.set(["119", "1700", "12", "1:3:6"], new Concrete("", 210, 0.50, 1.00, 143));
concretoTabla.set(["109", "1560", "11", "1:4:7"], new Concrete("", 175, 0.55, 0.98, 133));
concretoTabla.set(["99", "1420", "10", "1:4:8"], new Concrete("", 160, 0.55, 1.03, 125));

const morteroTabla = new Map<Tupla, Mortar>();

morteroTabla.set(["310", "4400", "30", "1:2"], new Mortar("", 525, 0.97, 235));
morteroTabla.set(["280", "3980", "27", "1:3"], new Mortar("", 450, 1.1, 203));
morteroTabla.set(["240", "3400", "23", "1:4"], new Mortar("", 375, 1.16, 178));
morteroTabla.set(["200", "2850", "19", "1:5"], new Mortar("", 300, 1.18, 160));
morteroTabla.set(["160", "2275", "16", "1:6"], new Mortar("", 275, 1.2, 145));
morteroTabla.set(["120", "1700", "12", "1:7"], new Mortar("", 228, 1.25, 135));

function tableConcrete(dosificacion: string): Concrete {
  for(const [key, value] of concretoTabla){
    for(const c of key){
      if(c === dosificacion){
        return value;
      }
    }
  }
  throw new Error("no se encontro la dosificacion");
}

export function table(dosificacion: string, tipo: string): Dosificacion{
  if (tipo == Recurso.CONCRETO){
    return tableConcrete(dosificacion) as Concrete;
  } else if (tipo == Recurso.MORTERO){
    return tableMortar(dosificacion) as Mortar;
  } else {
    throw new Error ("No se encontro el tipo en la tabla");
  }
}

function tableMortar(dosificacion: string): Mortar {
  for(const [key, value] of morteroTabla){
    for(const c of key){
      if(c === dosificacion){
        return value;
      }
    }
  }
  throw new Error("no se encontro la dosificacion");
}
