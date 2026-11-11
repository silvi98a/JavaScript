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

  precio() {
    return 200 + this.ram * 10 + this.disco * 0.1 + this.pulgadas * 5;
  }

  //métodos de Ampliación
  // A1
  static compararPorPrecio(a, b) { // lo uso en el main en la línea 53
    return a.precio() - b.precio();
  }

  // A2
  get tipo() { // lo uso en el main en la línea 28 
    return this.constructor.name;
  }
}
