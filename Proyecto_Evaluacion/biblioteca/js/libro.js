// Clase Libro: guarda los datos de un libro y sus métodos (RF1)
export class Libro {
  /**
   * Crea un libro.
   * @param {string} titulo - título del libro
   * @param {string} autor - autor del libro
   * @param {number} anio - año de publicación
   * @param {number} paginas - número de páginas
   * @param {string} genero - género (novela, teatro, poesía, ensayo...)
   * @param {boolean} [disponible=true] - true si no está prestado
   */
  constructor(titulo, autor, anio, paginas, genero, disponible = true) {
    this.titulo = titulo;
    this.autor = autor;
    this.anio = anio;
    this.paginas = paginas;
    this.genero = genero;
    this.disponible = disponible;
    this.vecesPrestado = 0; //ampliación: cuántas veces se ha prestado
    this.fechaDevolucion = null; //ampliación: fecha prevista de devolución (null si no hay)
  }

  
/* el @param dice lo que la función recibe
y el @returns lo que se devuelve con return.
Sirve para que si alguien usa la función, sepa el tipo de dato que va a recibir (un numero, texto, boolean, array)
y qué significa sin tener que leer el código
*/


  /**
   * Marca el libro como prestado.
   * @returns {boolean} true si se ha prestado, false si ya estaba prestado
   */
  prestar() {
    if (!this.disponible) {
      return false; //ya estaba prestado así qu no cambia nada
    }
    this.disponible = false;
    //ampliación
    this.vecesPrestado++; // suma 1 cada vez que se presta
    const fecha = new Date(); // fecha de hoy
    fecha.setDate(fecha.getDate() + 15); // setDate cambia el día del mes: hoy + 15 días
    this.fechaDevolucion = fecha;
    return true;
  }

  /**
   * Marca el libro como disponible.
   * @returns {boolean} true si se ha devuelto, false si ya estaba disponible
   */
  devolver() {
    if (this.disponible) {
      return false; //ya estaba disponible, entonces no cambia nada
    }
    this.disponible = true;
    //ampliación
    this.fechaDevolucion = null; // al devolverlo ya no hay fecha de devolución
    return true;
  }

  /**
   * Calcula los años que han pasado desde la publicación.
   * @returns {number} años desde su publicación
   */
  antiguedad() {
    return new Date().getFullYear() - this.anio; //getFullYear da el año actual, sin escribirlo a mano
  }

  /**
   * Genera un texto con los datos principales del libro.
   * @returns {string} texto del tipo "Niebla — Miguel de Unamuno (1914)"
   */
  resumen() {
    return `${this.titulo} — ${this.autor} (${this.anio})`;
  }
}
