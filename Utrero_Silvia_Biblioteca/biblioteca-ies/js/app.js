"use strict";

// ---------------------------------------------------------------------------
// FUNCIÓN DE APOYO (ya hecha, no la modifiques)
// Inserta un texto HTML dentro del elemento indicado por su selector CSS.
// Cómo funciona por dentro se estudiará en las unidades de objetos predefinidos
// y DOM. Por ahora, úsala como una "caja negra":
//   mostrar("#catalogo", "<p>Hola</p>");
// ---------------------------------------------------------------------------
function mostrar(selector, html) {
  document.querySelector(selector).innerHTML = html;
}

// ---------------------------------------------------------------------------
// R1 a R7: funciones de cálculo (no deben usar mostrar ni console.log)
// ---------------------------------------------------------------------------

// R1
function valoracionMedia(libro) {
  // TODO
}

// R2
function librosDisponibles(libros) {
  // TODO
}

// R3
function librosEntre(libros, desde, hasta) {
  // TODO
}

// R4
function generos(libros) {
  // TODO
}

// R5
function librosPorAutor(libros) {
  // TODO
}

// R6
function ranking(libros, n = 3) {
  // TODO
}

// R7
function resumen(libros) {
  // TODO
}

// ---------------------------------------------------------------------------
// R8: funciones que generan HTML (devuelven un string)
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// Programa principal
// ---------------------------------------------------------------------------
// mostrar("#catalogo", tablaLibros(LIBROS));
// ...
