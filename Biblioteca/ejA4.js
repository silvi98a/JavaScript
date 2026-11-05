const inscripciones = [
  "ana@ies.es",
  "luis@ies.es",
  "ANA@ies.es",
  "marta@ies.es",
  "luis@ies.es",
  "pablo@ies.es",
  "Marta@ies.es",
];

// 1. Set sin normalizar
const unicos = new Set(inscripciones);
console.log("Sin normalizar:", unicos.size);

// 2. Set normalizando a minúsculas
const unicosNorm = new Set();
for (const correo of inscripciones) {
  unicosNorm.add(correo.toLowerCase());
}
console.log("Normalizados:", unicosNorm.size);

// 3. Map para contar apariciones
const conteo = new Map();
for (const correo of inscripciones) {
  const c = correo.toLowerCase();
  if (conteo.has(c)) {
    conteo.set(c, conteo.get(c) + 1);
  } else {
    conteo.set(c, 1);
  }
}
for (const [correo, veces] of conteo) {
  console.log(`${correo} → ${veces}`);
}

// 4. Set del apartado 2 a array ordenado
const ordenados = [...unicosNorm].sort();
console.log(ordenados);
