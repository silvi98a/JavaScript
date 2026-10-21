function numPrimo(num) {
  if (num < 2) {
    return false; // 1) 0, 1 y negativos no son primos
  }

  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return false; // 2) Encuentra un divisor: ya sé que NO es primo
    }
  }
  return true; // Prueba con todos los números y ninguno lo divive -> Sí es primo
}

/*para que imprima por pantalla*/
let texto = "";
for (let n = 1; n <= 1000; n++) {
  if (numPrimo(n)) {
    texto += n + " ";
  }
}
document.getElementById("primos").textContent = texto;
/*Este Id es el que conecto con el html*/
