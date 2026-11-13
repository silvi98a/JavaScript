import { Ordenador } from "./Ordenador.js";
import { Portatil } from "./Portatil.js";
import { Tablet } from "./Tablet.js";
import { Servidor } from "./Servidor.js";
import { Gaming } from "./Gaming.js";

const inventario = [
  new Ordenador("HP", "EliteDesk", 16, 1024, 24),
  new Ordenador("Acer", "Aspire"),
  new Portatil("Apple", "MacBook Air"),
  new Portatil("Lenovo", "Yoga", 16, 1024, 14, 10),
  new Tablet("Apple", "iPad", 8, 256, 11, 10, true),
  new Tablet("Samsung", "Galaxy Tab"),
  new Servidor("Dell", "PowerEdge", 16, 64, 4000),
  new Gaming("Asus", "ROG", "RTX 4070", 32, 2000),
  new Gaming("HP", "Omen", "RX 7800"),
];

try {
  new Gaming("HP", "Omen");
} catch (e) {
  console.log(e.message);
}

// Funciones
function mostrarInventario(lista) {
  // muestra cada equipo numerado con su tipo, su toString() y su precio
  lista.forEach((equipo, i) => {
    console.log(
      `${i + 1}. [${equipo.tipo}] ${equipo.toString()} - ${equipo.precio().toFixed(2)} €`,
    );
  }); //[${equipo.constructor.name}].  No puedo poner equipo.tipo () porque a un getter no se le llama como a una función
}

function describir(equipo) {
  //muestra cada propiedad del equipo como "propiedad: valor"
  for (const propiedad in equipo) {
    console.log(`${propiedad}: ${equipo[propiedad]}`);
  }
}

function contarPortatiles(lista) {
  //cuenta los portátiles (las tablets cuentan si Tablet extiende Portatil)
  return lista.filter((equipo) => equipo instanceof Portatil).length;
}

function contarSoloPortatiles(lista) {
  //cuenta solo los portátiles, sin tablets
  return lista.filter((equipo) => equipo.constructor === Portatil).length; //se compara clase con clase
  // también se puede: equipo.constructor.name === "Portatil" y aquí se compara texto con texto
}

function masCaro(lista) {
  // devuelve el equipo más caro
  return lista.reduce(
    (max, equipo) => (equipo.precio() > max.precio() ? equipo : max),
    lista[0],
  );
}

function dentroDePresupuesto(lista, maximo) {
  // equipos que no superan el máximo, del más barato al más caro
  return lista
    .filter((equipo) => equipo.precio() <= maximo)
    .sort(Ordenador.compararPorPrecio);
} //.sort((a, b) => a.precio() - b.precio()); <- Lo que tenía antes puesto

function totalPorMarca(lista) {
  //objeto con el importe total de cada marca: { HP: 1579.8, ... }
  return lista.reduce((totales, equipo) => {
    totales[equipo.marca] = (totales[equipo.marca] || 0) + equipo.precio();
    return totales;
  }, {});
}

function ampliarRam(lista, clase, gb) {
  //suma gb a la RAM de los equipos de esa clase (o subclases)
  lista
    .filter((equipo) => equipo instanceof clase)
    .forEach((equipo) => {
      equipo.ram += gb;
    });
}

const totales = totalPorMarca(inventario);
for (const marca in totales) {
  console.log(`${marca}: ${totales[marca].toFixed(2)} €`);
}

//funciones de Ampliación
// A3
//devuelve cuántos equipos hay de cada clase: { Ordenador: 2, Portatil: 2, ... }
function contarPorTipo(lista) {
  return lista.reduce((conteo, equipo) => {
    conteo[equipo.tipo] = (conteo[equipo.tipo] || 0) + 1;
    return conteo;
  }, {});
}

//compruebo que ejecutan bien las funciones de Ampliación
console.log(contarPorTipo(inventario));
console.log(ramMediaPorTipo(inventario));

//devuelv la RAM media de cada clase: { Ordenador: 10, Portatil: 10, ... }
function ramMediaPorTipo(lista) {
  const sumas = {};
  const conteo = contarPorTipo(lista);
  lista.forEach((equipo) => {
    sumas[equipo.tipo] = (sumas[equipo.tipo] || 0) + equipo.ram;
  });
  const medias = {};
  for (const tipo in sumas) {
    medias[tipo] = sumas[tipo] / conteo[tipo];
  }
  return medias;
}

mostrarInventario(inventario);
describir(inventario[0]);
console.log("Portátiles:", contarPortatiles(inventario)); // 4
console.log("Solo portátiles:", contarSoloPortatiles(inventario)); // 2
const caro = masCaro(inventario);
console.log(`Más caro: ${caro.toString()} (${caro.precio().toFixed(2)} €)`); // Dell, 2828.00
console.log(
  "Hasta 700 €:",
  dentroDePresupuesto(inventario, 700).map((e) => e.toString()),
); // 5, empieza Acer
ampliarRam(inventario, Portatil, 8);

/*
Parte 7 — Preguntas
Responde en un comentario al final de main.js:
1. ¿Por qué contarPortatiles y contarSoloPortatiles dan resultados distintos? ¿Qué significa que una Tablet «es un» Portátil?
contarPortatiles usa instanceof, que también cuenta las subclases  (tablet hereda de portátil), así que incluye las tablets. contarSoloPortatiles compara el constructor y solo cuenta los Portátiles exactos.
"Una Tablet es un Portátil" significa que hereda de Portátil.

2. En mostrarInventario llamas a precio() sin saber de qué clase es cada equipo. ¿Cómo se llama esta característica? ¿Qué versión de precio() se ejecuta para una Tablet?
Por el polimorfismo. Consiste en tratar a objetos de distintas clases como si pertenecieran a una misma superclase, respondiendo de manera diferente al invocar el mismo método 
Para una Tablet se ejecuta el precio() de Tablet.

3. Tablet y Servidor sobrescriben precio() de forma distinta. ¿En qué se diferencian? ¿Cuándo conviene cada opción?
Tablet reutiliza el precio del padre con super y le suma algo. Servidor lo calcula desde cero.
Conviene reutilizar cuando el hijo es "el padre más algo", y reemplazar cuando la fórmula no se parece al padre.

4. ¿Por qué describir no muestra precio ni toString?
Porque for...in solo recorre las propiedades del objeto, y precio() y toString() son métodos de la clase, no propiedades.

5. Después de llamar a ampliarRam, ¿cambia el inventario original? ¿Por qué?
Sí cambia, porque filter crea un array nuevo pero con los mismos objetos, no copias.

6. ¿Qué pasaría en ampliarRam(inventario, Ordenador, 8)?
Se ampliaría la RAM de todos los equipos, porque todos son Ordenador o heredan de él.
*/
