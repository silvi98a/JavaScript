const notas = [7.5, 4.9, 10, 5, 6.25, 3, 8.8, 11, 9];

//bucle for clásico
for (let i = 0; i < notas.length; i++) {
  const nota = notas[i];
  let calificacion;

  if (nota < 0 || nota > 10) {
    calificacion = "Nota no válida";
  } else if (nota < 5) {
    calificacion = "Insuficiente";
  } else if (nota < 6) {
    calificacion = "Suficiente";
  } else if (nota < 7) {
    calificacion = "Bien";
  } else if (nota < 9) {
    calificacion = "Notable";
  } else {
    calificacion = "Sobresaliente";
  }

  console.log(`Alumno ${i + 1}: ${nota} → ${calificacion}.`);
}

//bucle for...of: aprobados, media y nota más alta (solo notas válidas)
let aprobados = 0;
let suma = 0;
let validas = 0;
let maxima = 0;

for (const nota of notas) {
  //recorre el array notas y, en cada vuelta, guarda el valor del elemento actual en la variable nota
  if (nota >= 0 && nota <= 10) {
    validas++;
    suma += nota;
    if (nota >= 5) {
      aprobados++;
    }
    if (nota > maxima) {
      maxima = nota;
    }
  }
}

const media = suma / validas;

console.log("Aprobados:", aprobados);
console.log("Media:", media.toFixed(2));
console.log("Nota más alta:", maxima);
