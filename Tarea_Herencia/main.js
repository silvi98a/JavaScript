import { Ordenador } from "./Ordenador.js";
import { Portatil } from "./Portatil.js";

console.log("Comprobación");

//ordenador indicando solo marca y modelo (usará valores por defecto)
const pc1 = new Ordenador("Dell", "Inspiron");
console.log(pc1.toString());

//ordenador indicando todos los valores
const pc2 = new Ordenador("HP", "EliteBook", 16, 1024, 15);
console.log(pc2.toString());

//portátil indicando solo marca y modelo (valores por defecto de portátil)
const portatil1 = new Portatil("Apple", "MacBook Air");
console.log(portatil1.toString());

//portátil indicando todos los valores
const portatil2 = new Portatil("Lenovo", "ThinkPad", 8, 512, 14, 8);
console.log(portatil2.toString());
