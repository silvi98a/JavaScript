const pedidos = [
    ["Ana", 120],
    ["Luis", 80],
    ["Ana", 45.5],
    ["Marta", 200],
    ["Luis", 150],
    ["Ana", 60],
];

// Meto el gasto por cliente
const gastoPorCliente = new Map();

// Recorro el array y en cada pasada acumulo el gasto de cada cliente e un map.
for (const [cliente, importe] of pedidos) {
    const acumulador = gastoPorCliente.get(cliente) ?? 0;
    gastoPorCliente.set(cliente, acumulador + importe);
}

console.log(gastoPorCliente);


// Busco el cliente con mayor gasto
let mejorCliente = "";
let mayorGasto = 0;

// Recorro el map para encontrar el de mayor gasto
for (const [cliente, total] of gastoPorCliente) {
    if (total > mayorGasto) {
        mayorGasto = total;
        mejorCliente = cliente;
    }
}