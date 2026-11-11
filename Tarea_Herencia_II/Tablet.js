import { Portatil } from "./Portatil.js";
export class Tablet extends Portatil {
  constructor(
    marca,
    modelo,
    ram = 4,
    disco = 128,
    pulgadas = 10,
    autonomia = 10,
    lapiz = false,
  ) {
    super(marca, modelo, ram, disco, pulgadas, autonomia);
    this.lapiz = lapiz;
  }

  precio() {
    return super.precio() + (this.lapiz ? 50 : 0); // lápiz sí? + 50€. Lápiz no? 0€
  }

  toString() {
    return `${super.toString()}, Lápiz: ${this.lapiz ? "sí" : "no"}`;
  }
}
