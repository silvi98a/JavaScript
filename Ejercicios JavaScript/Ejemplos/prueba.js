const edificio0 = ["oficina", "tienda", "gimnasio"];

const [piso01, piso02, piso03] = edificio0;

console.log(piso01); // "oficina"
console.log(piso02);
console.log(piso03);
console.log(edificio0); // ["oficina", "tienda", "gimnasio"] → sigue igual



const edificio = new Map([
  ["piso1", "oficina"],
  ["piso2", "tienda"],
  ["piso3", "gimnasio"],
]);

for (const [piso, contenido] of edificio) {
  console.log(piso, contenido);
}
// piso1 oficina
// piso2 tienda
// piso3 gimnasio

console.log(edificio); // sigue igual, no se modifica