import { catalogo } from "./biblioteca.js";
import { Libro } from "./libro.js";

const TEXTO_BUSQUEDA = "de"; // texto de la búsqueda de RF5

/**
 * Busca un libro del catálogo por su título exacto
 * @param {string} titulo - título del libro
 * @returns {Libro|undefined} el libro encontrado (undefined si no existe)
 */
function buscarPorTitulo(titulo) {
  return catalogo.libros.find((libro) => libro.titulo === titulo); // find devuelve el primer libro que cumple la condición
}

/**
 * Pinta una sección con su título y una tarjeta por libro.
 * @param {string} titulo - título de la sección
 * @param {Libro[]} lista - libros que se muestran
 * @returns {void}
 */
function pintarSeccion(titulo, lista) {
  const contenedor = document.querySelector(".secciones");
  const seccion = document.createElement("section");
  seccion.id = `seccion-${contenedor.children.length + 1}`; // id distinto para cada sección, lo usa el índice para el enlace
  seccion.innerHTML = `<h2>${titulo}</h2>`;

  const tarjetas = document.createElement("div");
  tarjetas.classList.add("tarjetas");
  if (lista.length === 0) {
    tarjetas.innerHTML = "<p>No hay libros en esta sección</p>";
  }
  for (const libro of lista) {
    const tarjeta = document.createElement("article");
    tarjeta.classList.add("tarjeta", libro.disponible ? "disponible" : "prestado"); // la clase cambia el color del borde en el CSS
    //ampliación
    // solo hay fecha si el libro se ha prestado. toLocaleDateString la escribe con el formato del navegador (día/mes/año)
    const fecha = libro.fechaDevolucion ? `Devolver antes del ${libro.fechaDevolucion.toLocaleDateString()}` : "";
    //ampliación (se añade la última línea con la fecha dentro de la tarjeta)
    tarjeta.innerHTML = `${libro.disponible ? "" : '<span class="etiqueta">Prestado</span>'}
      <h3>${libro.titulo}</h3>
      <p class="autor">${libro.autor}</p>
      <p class="datos">${libro.anio} · ${libro.paginas} páginas · ${libro.genero}</p>
      <p class="datos">${libro.disponible ? "Disponible" : "Prestado"}</p>
      <p class="datos">${fecha}</p>`;
    tarjetas.append(tarjeta);
  }

  seccion.append(tarjetas);
  contenedor.append(seccion);
}

/**
 * Pinta el índice con un enlace a cada sección ya pintada.
 * @returns {void}
 */
function pintarIndice() {
  const indice = document.querySelector(".indice");
  for (const seccion of document.querySelectorAll(".secciones section")) {
    const enlace = document.createElement("a");
    enlace.href = `#${seccion.id}`;//el enlace lleva a la sección con ese id
    //ampliación
    const cantidad = seccion.querySelectorAll("article").length; // cada libro es un article, así que se cuentan
    //ampliación (se añade la cantidad entre paréntesis al texto del enlace)
    enlace.textContent = `${seccion.querySelector("h2").textContent} (${cantidad})`; //el texto del enlace es el título de la sección y entre paréntesis su número de libros
    indice.append(enlace);
  }
}

/**
 * Pinta el panel con las estadísticas del catálogo.
 * @returns {void}
 */
function pintarEstadisticas() {
  const datos = catalogo.estadisticas();
  // [...datos.porGenero] pasa el Map a un array de pares [género, cantidad] para poder usar map
  const generos = [...datos.porGenero].map(([genero, cantidad]) => `<li>${genero}: ${cantidad}</li>`).join("");
  //ampliación (se añade la línea de "Más prestado" en la lista)
  document.querySelector(".estadisticas").innerHTML = `
    <h2>Estadísticas</h2>
    <ul>
      <li>Total: ${datos.total}</li>
      <li>Disponibles: ${datos.disponibles}</li>
      <li>Prestados: ${datos.prestados}</li>
      <li>Media de páginas: ${datos.mediaPaginas}</li>
      <li>Más antiguo: ${datos.masAntiguo.resumen()}</li>
      <li>Más prestado: ${datos.masPrestado.titulo} (préstamos: ${datos.masPrestado.vecesPrestado})</li>
    </ul>
    <h3>Libros por género</h3>
    <ul>${generos}</ul>`;
}

/*
//Pruebas para comprobar que funciona
//De libro
const prueba = new Libro("Niebla", "Miguel de Unamuno", 1914, 280, "novela");
console.log(prueba.prestar()); //true
console.log(prueba.prestar()); //false (porque ya estaba prestado)
console.log(prueba.devolver()); //true
console.log(prueba.devolver()); //false (porqueya estaba disponible)
console.log(prueba.antiguedad()); //112
console.log(prueba.resumen()); //Niebla — Miguel de Unamuno (1914)

//De la biblioteca
console.log(catalogo.agregar("hola")); // false (no es un Libro)
console.log(catalogo.libros.length); // 13
console.log(typeof catalogo.libros[8].anio); // "number" (Luces de bohemia, cargado desde texto)
console.log(catalogo.libros[9].disponible); // false (Fortunata y Jacinta, "no")
console.log(catalogo.buscar("UNAMUNO").length); //2 (mayúsculas no importan)
console.log(catalogo.buscar("quijote").length); //2
console.log(catalogo.filtrarPorGenero("novela").length); // 4
console.log(catalogo.filtrarPorDisponibilidad(true).length); // 9
console.log(catalogo.generos()); // ["ensayo", "novela", "poesía", "teatro"]
console.log(catalogo.ordenarPor("anio")[0].titulo); // El Quijote
console.log(catalogo.ordenarPor("titulo")[0].titulo); // Campos de Castilla
console.log(catalogo.ordenarPor("paginas", false)[0].titulo); // Fortunata y Jacinta... ver nota
console.log(catalogo.libros[0].titulo); // El Quijote (el original no cambia)
console.log(catalogo.estadisticas());
*/


// comprobación de los datos al iniciar
console.table(catalogo.libros);

//simulación de préstamos (RF6): se hace antes de pintar para que las vistas muestren el estado final
console.log("Prestar El Quijote:", buscarPorTitulo("El Quijote").prestar()); // true
console.log("Prestar Platero y yo:", buscarPorTitulo("Platero y yo").prestar()); // true
console.log("Prestar La vida es sueño:", buscarPorTitulo("La vida es sueño").prestar()); // true
console.log("Devolver La Regenta:", buscarPorTitulo("La Regenta").devolver()); // true
console.log("Prestar Campos de Castilla (ya prestado):", buscarPorTitulo("Campos de Castilla").prestar()); // false

// vistas (RF5), todas con pintarSeccion
pintarSeccion("Catálogo completo", catalogo.ordenarPor("titulo"));
pintarSeccion("Libros disponibles", catalogo.filtrarPorDisponibilidad(true));
pintarSeccion("Libros prestados", catalogo.filtrarPorDisponibilidad(false));
for (const genero of catalogo.generos()) {
  pintarSeccion(`Género: ${genero}`, catalogo.filtrarPorGenero(genero)); // una sección por cada género, aunque se añada uno nuevo
}
pintarSeccion("Los 5 libros más antiguos", catalogo.ordenarPor("anio").slice(0, 5));
//combino criterios juntando: filtro por género, luego por disponibilidad y por último ordeno por páginas
const novelasDisponibles = catalogo
  .filtrarPorGenero("novela")
  .filter((libro) => libro.disponible)
  .toSorted((a, b) => a.paginas - b.paginas);
pintarSeccion("Novelas disponibles ordenadas por páginas", novelasDisponibles);
pintarSeccion(`Resultados de la búsqueda "${TEXTO_BUSQUEDA}"`, catalogo.buscar(TEXTO_BUSQUEDA));
//ampliación
// una sección por cada autor con más de un libro
for (const [autor, libros] of catalogo.autoresConVariosLibros()) {
  pintarSeccion(`Autor con varios libros: ${autor}`, libros);
}

// Índice y estadísticas (RF7) después de pintar las secciones
pintarIndice();
pintarEstadisticas();