import { Ordenador } from "./Ordenador.js";
export class Servidor extends Ordenador {
  constructor(marca, modelo, nucleos = 8, ram = 32, disco = 2000) {
    // se quita pulgadas en el constructor respecto al padre (ordenador)
    super(marca, modelo, ram, disco, 0); // se pone 0 en las pulgadas
    this.nucleos = nucleos;
  }

  precio() {
    return 500 + this.nucleos * 60 + this.ram * 12 + this.disco * 0.15;
  }

  toString() {
    return `${this.marca} ${this.modelo} - ${this.nucleos} núcleos, RAM: ${this.ram} GB, Disco: ${this.disco} GB, sin pantalla`;
  }
}
