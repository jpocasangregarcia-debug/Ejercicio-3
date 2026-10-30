let boton = document.getElementById("saludar")
boton.addEventListener("click", function () {
let nombre = document.getElementById("nombre").value;

  if (nombre === "") {
    resultado.textContent = "Por favor, escribe tu nombre.";
  } else {
    resultado.textContent = "¡Hola, " + nombre + "! Bienvenido a la programación.";
  }
});
