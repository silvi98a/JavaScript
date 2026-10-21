function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  return a / b;
}

let a = Number(prompt("Dame el primer número: "));
let b = Number(prompt("Dame el segundo número: "));

let opcion = prompt(
  "Por favor, pon + si quieres suma, pon - si quieres resta o * para multiplicar, dividir pon /:",
);

switch (opcion) {
  case "+":
    alert("La suma es " + sumar(a, b));
    break;

  case "-":
    alert("La resta es " + restar(a, b));
    break;

  case "*":
    alert("La multiplicación es " + multiplicar(a, b));
    break;

  case "/":
    alert("La división es " + dividir(a, b));
    break;
}
