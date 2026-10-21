// 1. Creamos el Map: clave = módulo, valor = horas semanales
const modulos = new Map();
modulos.set("DWEC", 7);
modulos.set("DWES", 8);
modulos.set("DAW", 4);
modulos.set("DIW", 6);
modulos.set("EIE", 3);
modulos.set("IT", 2);

// 2. Mostramos los módulos y calculamos el total de horas
let listado = "";
let totalHoras = 0;

for (const [modulo, horas] of modulos) {
  listado += `<li>${modulo}: ${horas} horas</li>`;
  totalHoras += horas;
}

document.getElementById("listado").innerHTML = listado;
document.getElementById("total").textContent =
  `Hay ${modulos.size} módulos con un total de ${totalHoras} horas semanales.`;

// 3. Comprobamos si existe un módulo
const moduloBuscado = prompt("¿Qué módulo quieres comprobar?");

const comprobacion = document.getElementById("comprobacion");

if (modulos.has(moduloBuscado)) {
  //comprobacion.className = "ok";
  comprobacion.textContent = `El módulo "${moduloBuscado}" existe y tiene ${modulos.get(moduloBuscado)} horas semanales.`;
} else {
  //comprobacion.className = "error";
  comprobacion.textContent = `El módulo "${moduloBuscado}" no existe.`;
}

// 4. Eliminamos un módulo
const moduloEliminar = prompt(
  `¿Qué módulo quieres eliminaaaaar? (${[...modulos.keys()]})`,
);

const eliminacion = document.getElementById("eliminacion");

if (modulos.delete(moduloEliminar)) {
  //eliminacion.className = "ok";
  eliminacion.textContent = `Se ha eliminado "${moduloEliminar}". Quedan ${modulos.size} módulos:`;
} else {
  //eliminacion.className = "error";
  eliminacion.textContent = `No se ha podido eliminar "${moduloEliminar}" porque no existe.`;
}

let listadoFinal = "";

for (const [modulo, horas] of modulos) {
  listadoFinal += `<li>${modulo}: ${horas} horas</li>`;
}

document.getElementById("listadoFinal").innerHTML = listadoFinal;
