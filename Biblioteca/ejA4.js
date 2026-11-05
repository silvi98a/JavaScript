const inscripciones = [
  "ana@ies.es",
  "luis@ies.es",
  "ANA@ies.es",
  "marta@ies.es",
  "luis@ies.es",
  "pablo@ies.es",
  "Marta@ies.es",
];

// Set sin normalizar
//el set no admite duplicados, solo se queda con los valores distintos.
//el que es igual (luis) lo borra
//size dice cuántos hay
const unicos = new Set(inscripciones);
console.log("Sin normalizar:", unicos.size);

// Set normalizando a minúsculas
//creo un set vacío y se recorre el array con for..of
//cada correo lo paso a minúsculas, se convierten en un mismo valor pero solo..
//..se guarda uno
const unicosNorm = new Set();
for (const correo of inscripciones) {
  unicosNorm.add(correo.toLowerCase());
}
console.log("Normalizados:", unicosNorm.size);

// Map para contar apariciones
//el map guarda pares clave-valor (la clase es el correo(correo) y el valor cuántas veces aparece(conteo))
const conteo = new Map();
for (const correo of inscripciones) {
  const c = correo.toLowerCase();
  if (conteo.has(c)) {
    //existe la clave? (c -> correo)
    conteo.set(c, conteo.get(c) + 1); //si existe, sumo 1 al contador
  } else {
    conteo.set(c, 1); //si no existe, se crea con valor 1.
  }
}
for (const [correo, veces] of conteo) {
  //al recorrer un Map con for...of da pares [clave, valor], y [correo, veces] los desestructura en dos variables. Se imprime como ana@mail.com → 3.
  console.log(`${correo} → ${veces}`);
}

//set del apartado 2 a array ordenado
const ordenados = [...unicosNorm].sort(); //[...unicosNorm] usa el operador spread para convertir el Set en un array ya que un set no tiene .sort() y los ordena con sort().
console.log(ordenados);
