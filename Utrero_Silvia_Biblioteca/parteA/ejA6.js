function mediaAprobados(notas) {
  let suma = 0;
  let contador = 0;
  for (let i = 0; i <= notas.length; i++) {
    if (notas[i] > 5) {
      suma += notas[i];
      contador++;
    }
  }
  return suma / notas.length;
}
console.log(mediaAprobados(["7", 4, 5, 9.5, 3])); // Esperado: 7.17 aprox.


//CORRECCIÓN
function mediaAprobados1(notas) {
  let suma = 0;
  let contador = 0;
  for (let i = 0; i < notas.length; i++) {//< porque da una vuelta de más
    const nota = Number(notas[i]); //convierto a Number para que convierta a número todo y que no dé problema el "7" o lo que se le pase como String.
    if (nota >= 5) {
      //Utilizo la constante que he creado antes y cambio >= para que también cuente el 5
      suma += nota;
      contador++;
    }
  }

  if (contador === 0) return null;
  return suma / contador; //se divide entre los aprobados (lo que va acumulando contador), no entre todas las notas
}
console.log(mediaAprobados1(["7", 4, 5, 9.5, 3]));
