jugar();

function jugar() {
  const numeroSecreto = Math.floor(Math.random() * 100) + 1;
  // Math.random() da un decimal entre 0 y 1
  // lo multiplicamos por 100 y sumamos 1 para obtener un número entero del 1 al 100

  let intentos = 0;
  let acertado = false;
  let cancelado = false;

  while (!acertado && !cancelado) {
    const entrada = prompt("Adivina el número (del 1 al 100):");

    if (entrada === null) {
      cancelado = true;
    } else if (isNaN(entrada) || entrada.trim() === "") {
      alert("Eso no es un número. Inténtalo de nuevo.");
    } else {
      const numero = Number(entrada);
      intentos++;

      if (numero === numeroSecreto) {
        acertado = true;
      } else if (numero < numeroSecreto) {
        alert("El número es mayor.");
      } else {
        alert("El número es menor.");
      }
    }
  }

  if (cancelado) {
    document.getElementById("resultado").innerHTML = "Has cancelado el juego.";
  } else {
    document.getElementById("resultado").innerHTML =
      "¡Acertaste en " + intentos + " intentos!";
  }

  const otraVez = confirm("¿Quieres jugar otra vez?");
  if (otraVez) {
    jugar();
  }
}
