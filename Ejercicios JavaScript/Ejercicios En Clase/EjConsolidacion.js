const modulos2DAW = new Map([
    ["DWEC", 6],
    ["DWES", 8],
    ["DAW", 5],
    ["DIW", 6],
    ["EIE", 3],
])

//Mostrar cada módulo con sus horas
for (const [modulo, horas] of modulos2DAW) {
    console.log(`${modulo}: ${horas} h/semana`);
}

//Itrar sobre los valores para ir acumulandolos
let totalHoras = 0;

for (const horas of modulos2DAW.values()) {
    totalHoras += horas;
}

console.log(`Total: ${totalHoras} h/semana`);
