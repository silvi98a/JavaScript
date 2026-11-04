export class Ordenador {
  constructor(marca, modelo, ram = 4, disco = 512, pulgadas = 17) {
    if (typeof marca !== "string" || marca.trim() === "") {
      throw new Error("La marca es obligatoria");
    }
    if (typeof modelo !== "string" || modelo.trim() === "") {
      throw new Error("El modelo es obligatorio");
    }

    this.marca = marca;
    this.modelo = modelo;
    this.ram = ram;
    this.disco = disco;
    this.pulgadas = pulgadas;
  }

  toString() {
    return `${this.marca} ${this.modelo} — RAM: ${this.ram} GB, Disco: ${this.disco} GB, Pantalla: ${this.pulgadas}"`;
  }
}
