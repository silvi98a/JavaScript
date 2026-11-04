// 1. Catálogo de productos
const catalogo = [
  {
    id: 1,
    nombre: "Teclado",
    precio: 25.5,
    categoria: "periféricos",
    stock: 10,
  },
  { id: 2, nombre: "Ratón", precio: 12.0, categoria: "periféricos", stock: 0 },
  {
    id: 3,
    nombre: 'Monitor 24"',
    precio: 139.9,
    categoria: "pantallas",
    stock: 4,
  },
  { id: 4, nombre: "Cable HDMI", precio: 7.95, categoria: "cables", stock: 25 },
];

// 2. Objeto carrito
const carrito = {
  cliente: "Lucía",
  lineas: [],

  // 3. Método agregar
  agregar(idProducto, unidades = 1) {
    const producto = catalogo.find((p) => p.id === idProducto);

    if (!producto) {
      console.warn(`El producto con id ${idProducto} no existe`);
      return false;
    }

    // Comprobamos el stock contando lo que ya hay en el carrito
    const lineaExistente = this.lineas.find((l) => l.id === idProducto);
    const yaEnCarrito = lineaExistente ? lineaExistente.unidades : 0;

    if (yaEnCarrito + unidades > producto.stock) {
      console.warn(`No hay stock suficiente de ${producto.nombre}`);
      return false;
    }

    if (lineaExistente) {
      lineaExistente.unidades += unidades;
    } else {
      const { id, nombre, precio } = producto;
      this.lineas.push({ id, nombre, precio, unidades });
    }

    return true;
  },

  // 4. Método total
  total() {
    return this.lineas.reduce((suma, l) => suma + l.precio * l.unidades, 0);
  },

  // 5. Método resumen
  resumen() {
    return this.lineas
      .map(
        (l) =>
          `${l.unidades} x ${l.nombre} = ${(l.precio * l.unidades).toFixed(2)} €`,
      )
      .join("\n");
  },
};

// 6. Pruebas
carrito.agregar(1); // un teclado
carrito.agregar(3); // un monitor
carrito.agregar(1, 2); // dos teclados más
carrito.agregar(2); // ratón sin stock
carrito.agregar(99); // no existe

console.log(carrito.resumen());
console.log(`Total: ${carrito.total().toFixed(2)} €`);
console.table(carrito.lineas);
