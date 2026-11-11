"use strict";

// console.assert(condición, mensaje): si la condición es falsa, la consola muestra el mensaje en rojo; si es verdadera, no muestra nada

// R1
const novelas = LIBROS.find(libro => libro.titulo === "Novelas ejemplares"); // find devuelve el primer libro que cumple la condición
console.assert(valoracionMedia(novelas) === null, "R1: sin valoraciones debe dar null"); // libro sin valoraciones: debe dar null

// R2
console.assert(librosDisponibles(LIBROS).length === 8, "R2: debe haber 8 disponibles"); // valor de la tabla: 8 libros no prestados
console.assert(librosDisponibles([]).length === 0, "R2: array vacío debe dar 0"); // caso límite: array vacío

// R3
console.assert(librosEntre(LIBROS, "1950", "1960").length === 4, "R3: entre 1950 y 1960 debe haber 4"); // valor de la tabla: años como texto
console.assert(librosEntre(LIBROS, "abc", 2000).length === 0, "R3: año no válido debe dar []"); // caso límite: "abc" no es un año

// R4
console.assert(generos(LIBROS).length === 5, "R4: debe haber 5 géneros"); // valor de la tabla: 5 géneros sin repetir
console.assert(generos(LIBROS)[0] === "Ciencia ficción", "R4: el primero debe ser Ciencia ficción"); // el primero según el orden alfabético
console.assert(generos([]).length === 0, "R4: array vacío debe dar []"); // caso límite: array vacío

// R5
console.assert(librosPorAutor(LIBROS).get("Isaac Asimov") === 2, "R5: Isaac Asimov debe tener 2"); // valor de la tabla: get busca el autor en el mapa
console.assert(librosPorAutor([]).size === 0, "R5: array vacío debe dar un mapa vacío"); // caso límite: size es el número de elementos del mapa

// R6
console.assert(ranking(LIBROS)[0].titulo === "Matilda", "R6: el primero debe ser Matilda"); // valor de la tabla: el mejor valorado
console.assert(ranking(LIBROS, 100).length <= LIBROS.length, "R6: n mayor que el número de libros"); // caso límite: n grande no da error, devuelve los que haya

// R7
const datos = resumen(LIBROS); // guardo el objeto del resumen para comprobar sus propiedades
console.assert(datos.total === 13, "R7: total debe ser 13"); // valor de la tabla
console.assert(datos.prestados === 5, "R7: prestados debe ser 5"); // valor de la tabla
console.assert(datos.masAntiguo === "La Celestina", "R7: el más antiguo debe ser La Celestina"); // valor de la tabla
console.assert(resumen([]).masAntiguo === null, "R7: array vacío debe dar masAntiguo null"); // caso límite: array vacío


console.table(librosDisponibles(LIBROS)); // muestra los libros disponibles como una tabla en la consola