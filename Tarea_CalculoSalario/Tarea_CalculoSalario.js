document.getElementById("boton").addEventListener("click", calcularSalario);
// getElementById("boton") → "boton": el id debe coincidir exactamente con el del HTML (id="boton")

function calcularSalario() {
  const nombre = document.getElementById("nombre").value;
  const apellidos = document.getElementById("apellidos").value; //importante poner document.getElementById
  const edad = Number(document.getElementById("edad").value);
  const salario = Number(document.getElementById("salario").value);
                    //Se pone Number para convertir el texto a número

  //document: representa la página web
  // .getElementById: busca y escoge la etiqueta que le especifico usando el id. Ejemplo "nombre"
  // .value: lo que lee o modifica el dato interno del elemento pasado por id

  let nuevoSalario = salario;

  if (salario > 2000) {
    nuevoSalario = salario;
  } else if (salario >= 1000 && salario <= 2000) {
    if (edad > 45) {
      nuevoSalario = salario * 1.03;
    } else {
      nuevoSalario = salario * 1.1;
    }
  } else if (salario < 1000) {
    if (edad < 30) {
      nuevoSalario = 1100;
    } else if (edad >= 30 && edad <= 45) {
      nuevoSalario = salario * 1.03;
    } else {
      nuevoSalario = salario * 1.15;
    }
  }


 /* Dos opciones de conectar el .js con el html.
  document.getElementById("resultado").innerHTML =
    "Nombre: " + nombre + "<br>" +
    "Apellidos: " + apellidos + "<br>" +        Todo este párrafo se conecta con la
    "Edad: " + edad + "<br>" +                  línea 21 del index.html
    "Salario: " + salario + "<br>" +
    "Nuevo salario: " + nuevoSalario;
*/

  /*Preguntar a Carlos qué opción es mejor de las dos, si la de arriba (línea 36) o la de abajo (47)*/

    document.getElementById("resNombre").innerHTML = "Nombre: " + nombre;
    document.getElementById("resApellidos").innerHTML = "Apellidos: " + apellidos;
    document.getElementById("resEdad").innerHTML = "Edad: " + edad;
    document.getElementById("resSalario").innerHTML = "Salario: " + salario;
    document.getElementById("resNuevoSalario").innerHTML = "Nuevo salario: " + nuevoSalario;

}

/*Tarea
 https://aulavirtual36.educa.madrid.org/ies.leonardodavinci.madrid/mod/assign/view.php?id=90935
 */
