function media(...numeros) {
  console.log("numeros =", numeros, " | longitud:", numeros.length);

  if (numeros.length === 0) return 0;

  let acu = 0;

  for (const n of numeros) {
    acu = acu + n;
  }

  return acu / numeros.length;
}

console.log(media(10, 20));
console.log(media(10, 20, 30, 40, 50));
console.log(media());




console.log("\n --Spread--");

const datos = [10, 20, 30];

console.log(media(...datos));
console.log(media(0, ...datos, 100));
console.log(Math.max(...datos));
console.log(media(...[10, 80, 30]));




function informe(...notas,titulo) {
    return `${titulo}: ${notas.length} notas, media ${media(...notas)}`;
}