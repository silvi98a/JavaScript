import { Libro } from "./libro.js";

// Clase Biblioteca: guarda el array de libros y los métodos para trabajar con él (RF2 y RF3)
export class Biblioteca {
  /**
   * Crea una biblioteca vacía.
   */
  constructor() {
    this.libros = []; // array donde se guardan los libros
  }

  /**
   * Añade un libro a la biblioteca.
   * @param {Libro} libro - libro a añadir
   * @returns {boolean} true si se ha añadido, false si no es una instancia de Libro
   */
  agregar(libro) {
    if (!(libro instanceof Libro)) {
      return false; //instanceof comprueba que el objeto se ha creado con la clase Libro
    }
    this.libros.push(libro);
    return true;
  }

  /**
   * Crea libros a partir de un texto con una línea por libro y los campos separados por ;
   * @param {string} texto - líneas del tipo "titulo;autor;anio;paginas;genero;si"
   * @returns {void}
   */
  cargarDesdeTexto(texto) {
    const lineas = texto.split("\n"); // split separa el texto en un array, una posición por línea
    for (const linea of lineas) {
      if (linea.trim() === "") {
        continue; //salto lad líneas vacías
      }
      // split(";") separa los campos y trim quita los espacios de cada uno. Los 6 campos se guardan en 6 variables
      const [titulo, autor, anio, paginas, genero, disponible] = linea.split(";").map((campo) => campo.trim());
      // todos los campos llegan como texto: anio y paginas se pasan a número con Number y disponible a booleano
      this.agregar(new Libro(titulo, autor, Number(anio), Number(paginas), genero, disponible.toLowerCase() === "si"));
    }
  }

  /**
   * Busca los libros cuyo título o autor contengan el texto, sin distinguir mayúsculas.
   * @param {string} texto - texto a buscar
   * @returns {Libro[]} array nuevo con los libros que coinciden
   */
  buscar(texto) {
    const buscado = texto.toLowerCase(); // paso el texto a minúsculas
    return this.libros.filter(
      (libro) => libro.titulo.toLowerCase().includes(buscado) || libro.autor.toLowerCase().includes(buscado)
    ); // includes comprueba si un texto contiene a otro
  }

  /**
   * Filtra los libros de un género.
   * @param {string} genero - género a buscar
   * @returns {Libro[]} array nuevo con los libros de ese género
   */
  filtrarPorGenero(genero) {
    return this.libros.filter((libro) => libro.genero === genero);
  }

  /**
   * Filtra los libros según estén disponibles o prestados.
   * @param {boolean} disponible - true para los disponibles, false para los prestados
   * @returns {Libro[]} array nuevo con los libros que cumplen la condición
   */
  filtrarPorDisponibilidad(disponible) {
    return this.libros.filter((libro) => libro.disponible === disponible);
  }

  /**
   * Ordena los libros por un campo sin modificar el array original.
   * @param {string} campo - "titulo", "autor", "anio" o "paginas"
   * @param {boolean} [ascendente=true] - true de menor a mayor, false de mayor a menor
   * @returns {Libro[]} array nuevo ordenado
   */
  ordenarPor(campo, ascendente = true) {
    // toSorted ordena una copia, así this.libros no cambia
    return this.libros.toSorted((a, b) => {
      // si el campo es texto se compara con localeCompare y si es número, restando
      const resultado = typeof a[campo] === "string" ? a[campo].localeCompare(b[campo]) : a[campo] - b[campo];
      return ascendente ? resultado : -resultado; // el signo negativo invierte el orden
    });
  }

  /**
   * obtiene los géneros sin repetir.
   * @returns {string[]} array con los géneros ordenados alfabéticamente
   */
  generos() {
    const sinRepetir = new Set(this.libros.map((libro) => libro.genero)); // Set elimina los repetidos
    return [...sinRepetir].sort(); // se pasa a array con [...] para poder usar sort
  }

  //ampliacion
  /**
   * Obtiene los autores que tienen más de un libro.
   * @returns {Map<string, Libro[]>} Map con cada autor y sus libros, solo si tiene más de uno
   */
  autoresConVariosLibros() {
    const porAutor = Map.groupBy(this.libros, (libro) => libro.autor); // groupBy mete cada libro en el grupo de su autor
    const varios = new Map();
    for (const [autor, libros] of porAutor) {
      if (libros.length > 1) {
        varios.set(autor, libros); // solo se guardan los autores con más de un libro
      }
    }
    return varios;
  }

  /**
   * calcula las estadísticas de la biblioteca
   * @returns {{total: number, disponibles: number, prestados: number, mediaPaginas: number, masAntiguo: (Libro|null), masPrestado: (Libro|null), porGenero: Map<string, number>}} objeto con las estadísticas
   */
  estadisticas() {
    const total = this.libros.length;
    const disponibles = this.filtrarPorDisponibilidad(true).length;
    const sumaPaginas = this.libros.reduce((acumulado, libro) => acumulado + libro.paginas, 0); // reduce suma las páginas de todos los libros
    //ampliacion
    // reduce se queda con el libro que más veces se ha prestado (empieza por el primero)
    const masPrestado = this.libros.reduce((mayor, libro) => (libro.vecesPrestado > mayor.vecesPrestado ? libro : mayor), this.libros[0]);
    const porGenero = new Map(); //Map: género -> número de libros
    for (const libro of this.libros) {
      porGenero.set(libro.genero, (porGenero.get(libro.genero) ?? 0) + 1); // ?? 0 la primera vez que aparece el género
    }
    return {
      total: total,
      disponibles: disponibles,
      prestados: total - disponibles,
      mediaPaginas: total === 0 ? 0 : Math.round(sumaPaginas / total),//para no dividir entre 0
      masAntiguo: this.ordenarPor("anio")[0] ?? null, // el primero al ordenar por año (null si no hay libros)
      //ampliacion
      masPrestado: masPrestado ?? null, // null si no hay libros
      porGenero: porGenero,
    };
  }
}


export const catalogo = new Biblioteca(); // catálogo inicial

// 8 libros añadidos con agregar()
catalogo.agregar(new Libro("El Quijote", "Miguel de Cervantes", 1605, 1250, "novela"));
catalogo.agregar(new Libro("La casa de Bernarda Alba", "Federico García Lorca", 1945, 120, "teatro", false));
catalogo.agregar(new Libro("Niebla", "Miguel de Unamuno", 1914, 280, "novela"));
catalogo.agregar(new Libro("Rimas y leyendas", "Gustavo Adolfo Bécquer", 1871, 210, "poesía"));
catalogo.agregar(new Libro("Campos de Castilla", "Antonio Machado", 1912, 190, "poesía", false));
catalogo.agregar(new Libro("La vida es sueño", "Calderón de la Barca", 1635, 150, "teatro"));
catalogo.agregar(new Libro("En torno al casticismo", "Miguel de Unamuno", 1902, 220, "ensayo"));
catalogo.agregar(new Libro("La Regenta", "Leopoldo Alas Clarín", 1885, 900, "novela", false));

// 5 libros cargados con cargarDesdeTexto() (si = disponible, no = prestado)
catalogo.cargarDesdeTexto(`
  Luces de bohemia;Ramón del Valle-Inclán;1924;160;teatro;si
  Fortunata y Jacinta;Benito Pérez Galdós;1887;1000;novela;no
  Platero y yo;Juan Ramón Jiménez;1914;140;poesía;si
  Meditaciones del Quijote;José Ortega y Gasset;1914;200;ensayo;si
  Don Juan Tenorio;José Zorrilla;1844;180;teatro;si
`);