function dibujarTabla(filas = 10, columnas = 4, color = "black") {
  let html =
    "<table style='width:100%; border-collapse:collapse; border:3px solid " +
    color +
    "; margin-bottom:20px'>";
  for (let i = 0; i < filas; i++) {
    html += "<tr>";
    for (let j = 0; j < columnas; j++) {
      html += "<td style='border:1px solid " + color + "'>&nbsp;</td>";
    }
    html += "</tr>";
  }
  html += "</table>";
  document.write(html);
}

dibujarTabla();
dibujarTabla(20, 10);
for (let k = 0; k < 10; k++) {
  dibujarTabla(5, 4, "green");
}
