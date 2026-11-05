//catálogo de productos
const catalogo = [
  {id: 1, nombre: "Teclado", precio: 25.5, categoria: "periféricos", stock: 10},
  {id: 2, nombre: "Ratón", precio: 12.0, categoria: "periféricos", stock: 0},
  {id: 3, nombre: 'Monitor 24"', precio: 139.9, categoria: "pantallas", stock: 4},
  {id: 4, nombre: "Cable HDMI", precio: 7.95, categoria: "cables", stock: 25},
];

//objeto carrito
const carrito = {
  cliente: "Lucía",
  lineas: [],

  //método agregar
  agregar(idProducto, unidades = 1) {
    const producto = catalogo.find((p) => p.id === idProducto); // === sea ESTRICTAMENTE igual

    if (!producto) {
      console.warn(`El producto con id ${idProducto} no existe`);
      return false;
    }

    /*if(producto.stock<unidades) {
      console.warn(`Sin stock suficiente de ${producto.nombre}`);
      return false;
    }
*/
    //compruebo el stock contando lo que ya hay en el carrito
    const lineaExistente = this.lineas.find((l) => l.id === idProducto);
    let yaEnCarrito = lineaExistente ? lineaExistente.unidades : 0;

    if (yaEnCarrito + unidades > producto.stock) {
      console.warn(`No hay stock suficiente de ${producto.nombre}`);
      return false;
    }

    if (lineaExistente) {
      //producto ya está en el carrito
      lineaExistente.unidades += unidades;
    } else {
      // cuando el producto todavía no está en el carrito
      const { id, nombre, precio } = producto; // creo el producto nuevo
      /*otra manera de crear el producto
      this.lineas.push({
      id:producto.id
      nombre:producto.nombre,
      precio:producto.precio,
      unidades:unidades //al tener arriba en agregar (..., unidades) lo puedo poner así
      })
      */
      this.lineas.push({ id, nombre, precio, unidades }); //coge el producto nuevo y le añade id, nombre..
    }

    return true;
  },

  //método total
  total() {
    return this.lineas.reduce((acumulador, l) => acumulador + l.precio * l.unidades, 0); //el 0 es el valor inicial que va a tener el acumulador, si no se pone, será el del array.
  },

  //método resumen
  resumen() {
    return this.lineas.map((l) => `${l.unidades} x ${l.nombre} = ${(l.precio * l.unidades).toFixed(2)} €`,).join("\n");
  },    // el ((1) es que va a actuar solo en una línea en cada vuelta
};

//prueba
carrito.agregar(1); // un teclado
carrito.agregar(3); // un monitor
carrito.agregar(1, 2); // dos teclados más
carrito.agregar(2); // ratón sin stock
carrito.agregar(99); // no existe

console.log(carrito.resumen());
console.log(`Total: ${carrito.total().toFixed(2)} €`);
console.table(carrito.lineas);
