const colores = ["Green", "Blue", "Purple", "Yellow", "Orange", "Red"];

const aleatorio = Math.floor(Math.random() * (5 - 0 + 1) + 0);
document.body.style.backgroundColor = colores[aleatorio];

const colores1 = ["Green", "Blue", "Purple", "Yellow", "Orange", "Red"];
const posicion = Math.floor(Math.random() * colores1.length);
document.body.style.backgroundColor = colores1[posicion];