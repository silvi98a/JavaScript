import { Ordenador } from "./Ordenador.js";
export class Gaming extends Ordenador {
  constructor(marca, modelo, grafica, ram = 16, disco = 1024, pulgadas = 27) {
    if (!grafica) { // también se puede poner   if (typeof grafica !== "string" || grafica.trim() === "") {
      throw new Error("La tarjeta gráfica es obligatoria");
    }

    super(marca, modelo, ram, disco, pulgadas); // no se pone como los demás ya que esto lo hereda tal cual de Ordenador.
    this.grafica = grafica;
  }

  precio () {
    return super.precio() + 400; // el precio de un ordenador y se le añade 400€
  }

  toString() {
    return `${super.toString()}, Gráfica: ${this.grafica}`;
  }
}
