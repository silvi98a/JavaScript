const min = Number(prompt("Introduce el valor mínimo"));
const max = Number(prompt("Introduce el valor máximo"));

const numero = Math.floor(Math.random() * (max - min + 1)) + min;

alert(`Número aleatorio entre ${min} y ${max}: ${numero}`);

