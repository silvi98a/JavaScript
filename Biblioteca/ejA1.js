console.log("5" + 3); // 53
console.log("5" * 3); // 53 -> mal. da 15
console.log("5" - "2"); // 52 -> mal. da 3
console.log(Number("")); // null -> mal. da 0
console.log(Number("12px")); // 12 -> mal. da NaN (Not a Number)
console.log(parseInt("12px")); // 12
console.log(parseFloat("3.75€")); // 3.75
console.log("10" == 10); // true (es lo mismo)
console.log("10" === 10); // false
console.log(null + 1); // null -> mal. da 1
console.log(undefined + 1); // null -> mal. da NaN
console.log(typeof NaN); // NaN -> mal. da "number"
console.log(Boolean("0")); // false -> mal. da True (aunque parezca un 0, es un string no vacío y todos son truthy menos "" que es falsy)
console.log(0 || "valor por defecto"); // valor por defecto -> El operador || devuelve el lado derecho si el izquierdo es falsy, y 0 es falsy.
console.log(0 ?? "valor por defecto"); // 0 -> El operador ?? solo devuelve el lado derecho si el izquierdo es null o undefined. El 0 no lo es, así que se queda con 0.
