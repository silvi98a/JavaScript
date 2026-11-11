import { Ordenador } from "./Ordenador.js";

export class Portatil extends Ordenador {
  constructor(
    marca,
    modelo,
    ram = 4,
    disco = 256,
    pulgadas = 12,
    autonomia = 4,
  ) {
    super(marca, modelo, ram, disco, pulgadas);
    this.autonomia = autonomia;
  }

  precio() {
    return super.precio() + 100 + this.autonomia * 15;
  }
  toString() {
    return `${super.toString()}, Autonomía: ${this.autonomia} horas`;
  }
}
