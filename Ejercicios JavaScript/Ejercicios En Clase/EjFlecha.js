//Paso 0
function cuadrado1(n) {
    return n*n;
}

//Paso 1: guardar la función en una constante
const cuadrado2 = function (n) {
    return n*n;
}

//Paso 2: quitamos "function"
const cuadrado3 = (n) => {
    return n*n;
}

//Paso 3: si es solo una expresión quitamos llaves y retorno
const cuadrado4 = (n) => n*n;

//Paso 4: Con un solo parámetro le puedo quitar las llaves
const cuadrado5 = (n) => n*n;

console.log(cuadrado1(4), cuadrado2(4), cuadrado3(4), cuadrado4(4), cuadrado5(4));

// Cuerpo con varias sentencias: llaves y return obligatorios
const calificar = nota => {
    if (nota<5) return "suspenso";
    if (nota>=5) return "aprobado";
}
console.log(calificar(6));

// Probando función
const resta = (a,b) => {a-b};
console.log(resta(5, 4));
//Da error

//Sería de la siguiente manera, con el return
const resta1 = (a,b) =>  {
    return a-b
}
console.log(resta1(5, 4));

// Datos de partida: notas de un grupo de 2ºDAW

const alumnos = [
    { nombre: 'Pepe', nota: 8},
    { nombre: 'Papa', nota: 6},
    { nombre: 'Popo', nota: 3},
    { nombre: 'Pipi', nota: 5.6},
    { nombre: 'Pupu', nota: 5},
];

//1.1 Reescibre esta función como flecha con retorno implícito.
function estaAprobado (nota) {
    return nota >= 5;
}
//Solución 1.1
const estaAprobadoConFlecha = (nota) => nota >=5;



//1.2 Reescribe como flecha. Pista: hay parámetro por defecto.
function redondear(numero, dimales = 1) {
    return Math.round(numero*10 ** decimales) / 10 ** decimales;
}
//Solución 1.2
const redondearFlecha = (numero, decimales = 1) => Math.round(numero * 10 ** decimales) / 10 ** decimales;

//1.3 ¿undefined?
// Las llaves se interpretan como BLOQUE de código, no como objeto.
//Para que se interprete como un objeto literal hay que envolverlo entre paréntesis.
const ficha = (nombre,nota) => ({nombre, nota}); //IMPORTANTE LOS ÚLTIMOS ( )

//2 flechas como callbacks
//Crea "nombreAprobados" recibe un array de alumnos y devuelve un array con los nombre de los aprobados
//Encadenamos filter (selecciona) y map (transforma). En la definición de la función callback utilizamos
// una función definida anteriormente.

//Solución 2.1
const nombreAprobados = (lista) => lista.filter((a)=>estaAprobadoConFlecha(a.nota)).map((a)=>a.nombre);


//2.2 Crea "notaMedia": recibe un array de alumnos y devuelve la media
// redondeada a a 1 decimal (reutiliza redondearFlecha).
// Si el array está vacío, devuelve 0.
// Pista: for...of dentro de una flecha con llaves.
