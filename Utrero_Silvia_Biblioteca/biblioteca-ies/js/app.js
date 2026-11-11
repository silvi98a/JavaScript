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


// R1 a R7: funciones de cálculo (no deben usar mostrar ni console.log)

// R1
// recibe un libro y devuelve la media de las valoraciones del libro o null si no hay valoraciones.
function valoracionMedia(libro) {
  const valoraciones = libro.valoraciones;
  if (valoraciones.length === 0) {
    return null;
  } //acumulado es la variable donde se va guardando cada valor, 0 es desde donde empieza el contador
  const suma = valoraciones.reduce((acumulado, valor) => acumulado + valor, 0); //reduce pasa todos los elementos de un array a un único valor
  const media = suma / valoraciones.length;
  return Math.round(media * 10) / 10; //para que dé un decimal
}

// R2
// recibe el array libros y devuelve un array nuevo con los libros disponibles
function librosDisponibles(libros) {
  const disponibles = libros.filter((libro) => libro.prestado === false); // con el array de libros, llamo al método filter, creo una variable TEMPORAL libro y accedo a los prestados del array anterior y lo guardo en la variable temporal.
  return disponibles;
}

// R3
// coge los libros publicados entre dos años
// recibe el array libros y los años desde y hasta
// devuelve un array nuevo. Vacío si algún año no es válido o desde es mayor que hasta
function librosEntre(libros, desde, hasta) {
  const inicio = Number(desde);
  const fin = Number(hasta);
  if (isNaN(inicio) || isNaN(fin) || inicio > fin) {
    //si inicio o fin isNaN(no son un número) o la fecha de inicio es mayor que la de fin, devuelve un array vacío
    return [];
  }
  return libros.filter((libro) => libro.anio >= inicio && libro.anio <= fin); // inicio -> año mayor o igual que el año de inicio
} // fin -> menor o igual que el año de fin

// R4
// obtiene los géneros sin repetir ordenados alfabéticamente. Se le pasa el array de libros y devuelve un array solo con generos
function generos(libros) {
  const todosLosGeneros = libros.map((libro) => libro.genero); // un género por cada libro (con repetidos)
  const sinRepetir = new Set(todosLosGeneros); // Set elimina los repetidos
  return [...sinRepetir].sort(); // convierte el Set (sinRepetir) a un array y así poder usar .sort (ya que un Set NO PUEDE usar .sort) y lo ordena alfabéticamente
}

// R5
// busca cuántos libros tiene el autor, buscando en libros con un forEach y guardando
// en mapa clave-valor (autor -> numLibro). Añadiendo con set y consultando el mapa con get
// recibe el array de libros y devuelve un Map con cada autor y su número de libros
function librosPorAutor(libros) {
  const mapa = new Map(); // creo el mapa para guardar las clave-valor (autor -> numLibros)
  libros.forEach((libro) => {
    // recorre los libros de uno en uno
    const cantidad = mapa.get(libro.autor) ?? 0; // 0 la primera vez que aparece el autor. Si el autor no está en el mapa, get devuelve undefined. Lo que hace ?? 0 es que si lo de la izquierda es undefined o null, usar el 0. Así la cantidad será siempre un número
    mapa.set(libro.autor, cantidad + 1); // anoto con set en mapa la cantidad de libros
  });
  return mapa;
}

/* LO PONGO EN COMENTARIO YA QUE DEJO EL DE LA AMPLICACIÓN FUNCIONANDO

// R6
// obtiene los libros mejor valorados, de mayor a menor valoración media.
// recibe el array de libros y n (3 por defecto si no se le pasa un valor). quitando los libros sin valoraciones
// devuelve un array nuevo con como máximo n libros, sin modificar el original
function ranking(libros, n = 3) {
  const conValoraciones = libros.filter((libro) => valoracionMedia(libro) !== null); //Llama a la función del R1. distinto de null (para que salgan las que tienen valoraciones y no las que tengan null (ninguna valoración))
  // creo un array nuevo con filter quitando a los que no tienen valoraciones
  conValoraciones.sort((a, b) => { //llama a dos libros y compara las medias de las valoraciones. Se pone b-a para que ordene de mayor a menor, si se pone a-b sería de menor a myor.
    const diferencia = valoracionMedia(b) - valoracionMedia(a); //mayor media primero
    if (diferencia !== 0) {
      return diferencia;
    }
    return a.titulo.localeCompare(b.titulo); //si empatan por valoración, se ordena por título
  });
  return conValoraciones.slice(0, n); // muestra desde 0 hasta n los libros del ranking, por defecto, pondría 3 si no se le pone número.
}
*/

// AMPLIACIÓN 1 y 3: ranking configurable y usando toSorted
// criterios de orden: reciben dos libros (a, b) y devuelven un número, igual que la función de comparación de sort
function porMedia(a, b) {
  return valoracionMedia(b) - valoracionMedia(a); // mayor media primero
}

function porNumValoraciones(a, b) {
  return b.valoraciones.length - a.valoraciones.length; // más valoraciones primero
}

function porAntiguedad(a, b) {
  return a.anio - b.anio; // más antiguo primero
}

// obtiene los n primeros libros según el criterio de orden.
// recibe el array de libros, n (3 por defecto) y el criterio (porMedia por defecto). quita los libros sin valoraciones
// devuelve un array nuevo con como máximo n libros, sin modificar el original
function ranking(libros, n = 3, criterio = porMedia) {
  const conValoraciones = libros.filter((libro) => valoracionMedia(libro) !== null);
  const ordenados = conValoraciones.toSorted((a, b) => criterio(a, b) || a.titulo.localeCompare(b.titulo)); // toSorted ordena una copia. Si el criterio empata (0), desempata por título
  return ordenados.slice(0, n);
}

// AMPLIACIÓN 2
// busca los libros cuyo título o autor contengan el texto, sin distinguir mayúsculas.
// recibe el array de libros y el texto a buscar
// devuelve un array nuevo con los libros que coinciden
function buscar(libros, texto) {
  const buscado = texto.toLowerCase(); // paso el texto a minúsculas
  return libros.filter(
    (libro) => libro.titulo.toLowerCase().includes(buscado) || libro.autor.toLowerCase().includes(buscado)
  ); // includes comprueba si un texto contiene a otro
}

// AMPLIACIÓN 3
// agrupa los libros por género.
// recibe el array de libros y devuelve un Map con cada género y un array con sus libros
function librosPorGenero(libros) {
  return Map.groupBy(libros, (libro) => libro.genero); // groupBy mete cada libro en el grupo de su género
}


// R7
// recibe el array de libros y devuelve un objeto con total, prestados, disponibles, mediaGlobal y masAntiguo (título).
function resumen(libros) {
  const valoraciones = libros.flatMap(libro => libro.valoraciones); // todas las valoraciones en un solo array
  const suma = valoraciones.reduce((acumulado, valor) => acumulado + valor, 0);
  const masAntiguo = [...libros].sort((a, b) => a.anio - b.anio)[0]; // copia ordenada por año. El primero es el más antiguo (undefined si no hay libros)

  return {
    total: libros.length,
    prestados: libros.filter(libro => libro.prestado).length,
    disponibles: librosDisponibles(libros).length, // función del R2
    mediaGlobal: valoraciones.length === 0 ? null : Math.round(suma / valoraciones.length * 10) / 10, // null si no hay valoraciones (evita dividir entre 0)
    masAntiguo: masAntiguo ? masAntiguo.titulo : null // null si no hay libros (evita el error con undefined)
  };
}



// R8: funciones que generan HTML (devuelven un string)
// genera la tabla HTML del catálogo.
// recibe el array de libros y devuelve un string con la tabla.
function tablaLibros(libros) {
  const filas = libros.map(libro => `
    <tr class="${libro.prestado ? "prestado" : ""}">
      <td>${libro.titulo}</td>
      <td>${libro.autor}</td>
      <td>${libro.genero}</td>
      <td>${libro.anio}</td>
      <td>${libro.prestado ? "Prestado" : "Disponible"}</td>
      <td>${valoracionMedia(libro) ?? "Sin valorar"}</td> 
    </tr>`).join(""); // map crea una fila <tr> por cada libro y join las une en un solo texto
  // la clase "prestado" solo se añade si el libro está prestado (para darle otro estilo en el css)
  // ?? "Sin valorar": si la media es null, se muestra ese texto en lugar de null
    return `<table>${filas}</table>`;
}

// genera la lista HTML de géneros.
// recibe el array de géneros y devuelve un string con una lista.
function listaGeneros(listaDeGeneros) {
  const items = listaDeGeneros.map(genero => `<li>${genero}</li>`).join(""); //se pone el <li> por cada género y se vuelve a unir por el join
  return `<ul>${items}</ul>`;
}

// genera la lista HTML del ranking.
// recibe el array de libros del ranking y devuelve un string con una lista.
function listaRanking(librosRanking) {
  const items = librosRanking.map(libro => `<li>${libro.titulo} (${valoracionMedia(libro)})</li>`).join(""); // <li> por cada libro con su título y su media
  return `<ol>${items}</ol>`; // <ol> para la númeración de las listas
}

// genera el HTML del resumen.
// recibe el objeto que devuelve resumen() y devuelve un string con una lista.
function htmlResumen(datos) {
  return `
    <ul>
      <li>Total: ${datos.total}</li>
      <li>Prestados: ${datos.prestados}</li>
      <li>Disponibles: ${datos.disponibles}</li>
      <li>Media global: ${datos.mediaGlobal}</li>
      <li>Más antiguo: ${datos.masAntiguo}</li>
    </ul>`; // cada <li> muestra una propiedad del objeto con ${datos.propiedad} (datos.total, datos.prestados...)
}

// genera la lista HTML de libros por autor.
// recibe el Map que devuelve librosPorAutor() y devuelve un string con una lista.
function listaAutores(mapa) {
  const items = [...mapa].map(([autor, cantidad]) => `<li>${autor}: ${cantidad}</li>`).join("");
  return `<ul>${items}</ul>`;
  // [...mapa] pasa el Map a un array de pares (clave-valor) [autor, cantidad] para poder usar map
}


// Programa principal
// muestra cada resultado en su sección con la función mostrar
mostrar("#resumen", htmlResumen(resumen(LIBROS)));
mostrar("#catalogo", tablaLibros(LIBROS));
mostrar("#generos", listaGeneros(generos(LIBROS)));
mostrar("#ranking", listaRanking(ranking(LIBROS)));
mostrar("#autores", listaAutores(librosPorAutor(LIBROS)));



/*prueba del apartado 2 y 3
mostrar("#catalogo", "<p>Hola</p>"); */


librosDisponibles(LIBROS).length;


