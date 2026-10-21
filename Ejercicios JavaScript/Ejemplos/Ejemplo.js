const nums = [10, 20, 30, 40];

/* Muestro el contenido de fragmentos del array. */
console.log("Slice(-3): " + nums.slice(-3));
console.log("Slice(-1): " + nums.slice(-1));

/* Hago una copia con slice()*/
const copia = nums.slice();

copia.push(50);
console.log("contenido de copia: " + copia);
console.log("contenido de nums: " + nums);

/* Hago una copia con el operador = */
const alias = nums;
alias.push(50);

console.log("Contenido de nums después del push: " + nums);
console.log("Contenido de alias después del push: " + alias);
