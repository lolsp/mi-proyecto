document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Evitar el envío del formulario por defecto

  // Aquí puedes agregar cualquier lógica de verificación del inicio de sesión
  // Por ahora, simplemente mostraremos el formulario de la pregunta después de iniciar sesión

  document.getElementById("loginContainer").style.display = "none"; // Ocultar el formulario de inicio de sesión
  document.getElementById("surveyContainer").style.display = "block"; // Mostrar el formulario de la pregunta
});
