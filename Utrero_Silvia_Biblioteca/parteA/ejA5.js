function transformar(array, fn) {
  const resultado = [];
  for (const elemento of array) {
    resultado.push(fn(elemento));
  }
  return resultado;
}

function quedarse(array, condicion) {
  const resultado = [];
  for (const elemento of array) {
    if (condicion(elemento)) {
      resultado.push(elemento);
    }
  }
  return resultado;
}

const dobles = transformar([3, 8, 1, 6], (n) => n * 2);
const pares = quedarse(dobles, (n) => n % 2 === 0);
console.log(pares); // [6, 16, 2, 12]

//Lo mismo que TODO el ejrcicio anterior pero con map y filter
const resultado = [3, 8, 1, 6].map((n) => n * 2).filter((n) => n % 2 === 0);
console.log(resultado); // [6, 16, 2, 12]
//la parte de map.((n) lo que hace es multiplicar cada elemento por 2 y devolver un array nuevo
//filter recorre el array nuevo y deja solo los que son pares (los que cumplen la condición)


const precios = [12, 45, 8, 99, 30];
const total = precios.filter((p) => p > 10).map((p) => p * 1.21).reduce((acc, p) => acc + p, 0).toFixed(2);
console.log(total); // "225.06"

//filter recorre el array nuevo y deja solo los que son pares (los que cumplen la condición)
//map recorre un array y devuelve uno nuevo del mismo tamaño con los elementos nuevos
//reduce recorre un array y lo reduce a un único valor (un número, un string, un objeto...)
//toFixed no es un método de arrays, sino de números. Los formatea con un número fijo de decimales y devuelve un string