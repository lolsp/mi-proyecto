document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Evitar el envío del formulario por defecto

  // Simular la verificación del inicio de sesión en el lado del servidor
  var usuarioValido = true; // Esto debería ser verificado en el servidor

  if (usuarioValido) {
    // Mostrar el formulario de la pregunta
    var loginContainer = document.getElementById("loginContainer");
    var surveyContainer = document.getElementById("surveyContainer");
    if (loginContainer && surveyContainer) {
      loginContainer.style.display = "none";
      surveyContainer.style.display = "block";
    } else {
      console.error("No se encontraron los contenedores necesarios.");
    }
  } else {
    // Mostrar un mensaje de error si las credenciales son inválidas
    alert("Credenciales de inicio de sesión inválidas");
  }
});

document.getElementById("surveyForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Evitar el envío del formulario por defecto

  // Recopilar la información del formulario de la pregunta
  var respuesta = document.getElementById("aiHelp").value;

  // Enviar la información del formulario por correo electrónico utilizando EmailJS
  emailjs.send("service_46f6g7s", "template_fagqh97", {
    respuesta: respuesta
  })
  .then(function(response) {
    console.log("Correo electrónico enviado correctamente", response);
    // Limpiar el formulario o hacer cualquier otra acción necesaria
    document.getElementById("surveyForm").reset();
    // Opción: Redirigir a una página de confirmación
    window.location.href = "confirmacion.html";
  }, function(error) {
    console.error("Error al enviar el correo electrónico", error);
    // Mostrar un mensaje de error al usuario
    alert("Error al enviar el correo electrónico. Por favor, inténtelo de nuevo más tarde.");
  });
});
