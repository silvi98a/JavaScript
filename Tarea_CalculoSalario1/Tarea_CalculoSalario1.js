jugar(); // Llamo a la función jugar() para que el juego arranque apenas se carga el script

function jugar() {
  // Genero un número secreto entre 1 y 100
  const numeroSecreto = Math.floor(Math.random() * 100) + 1;
  // Math.random() da un decimal entre 0 y 1
  // lo multiplicamos por 100 y sumamos 1 para obtener un número entero del 1 al 100

  let intentos = 0; // Contador de intentos que lleva el jugador
  let acertado = false; // Se vuelve true cuando el jugador adivina el número
  let cancelado = false; // Se vuelve true si el jugador cancela el prompt

  // El bucle sigue pidiendo números mientras no se acierte ni se cancele
  while (!acertado && !cancelado) {
    const entrada = prompt("Adivina el número (del 1 al 100):"); // Pido un número al usuario

    if (entrada === null) {
      // Si el usuario le da a "Cancelar" en el prompt, entrada es null
      cancelado = true; // Marco que canceló para salir del bucle
    } else if (isNaN(entrada) || entrada.trim() === "") {
      // Si lo que escribió no es un número, o dejó el campo vacío
      alert("Eso no es un número. Inténtalo de nuevo."); // Aviso y sigo en el bucle
    } else {
      const numero = Number(entrada); // Convierto el texto ingresado a número
      intentos++; // Sumo un intento cada vez que se ingresa un número válido

      if (numero === numeroSecreto) {
        acertado = true; // Si coincide con el número secreto, gana y se sale del bucle
      } else if (numero < numeroSecreto) {
        alert("El número es mayor."); // número secreto es más alto
      } else {
        alert("El número es menor."); // número secreto es más bajo
      }
    }
  }

  // Al salir del bucle, muestro el resultado
  if (cancelado) {
    document.getElementById("resultado").innerHTML = "Has cancelado el juego."; // Mensaje si se cancela
  } else {
    document.getElementById("resultado").innerHTML =
      "¡Acertaste en " + intentos + " intentos!"; // Mensaje si se gana, mostrando cuántos intentos se ha hecho
  }

  // Pregunto si quiere jugar de nuevo
  const otraVez = confirm("¿Quieres jugar otra vez?");
  if (otraVez) {
    jugar(); // Si dice que sí, vuelvo a llamar a la función y empieza otra partida
  }
}