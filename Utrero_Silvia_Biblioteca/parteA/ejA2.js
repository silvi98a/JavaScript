const gastosEnvio = 5;
let total = 0;
function calcularTotal(precio, unidades) {
  let total = precio * unidades + gastosEnvio;
  if (total > 50) {
    const descuento = 10;
    total = total - descuento;
  }
  console.log("Dentro:", total);
  return total;
}
calcularTotal(20, 3);
console.log("Fuera:", total);
console.log(descuento);
