<?php

// Correo electrónico de destino
$destinatario = "zukoweb.3a@gmail.com";

// Asunto del correo
$asunto = "Respuesta de encuesta";

// Datos del formulario
$respuesta = $_POST['aiHelp'];

// Construir el mensaje del correo
$mensaje = "Respuesta: $respuesta\n";

// Cabeceras del correo
$headers = "From: noreply@example.com";

// Enviar el correo
mail($destinatario, $asunto, $mensaje, $headers);

// Redireccionar a una página de confirmación o a donde desees
header("Location: formulario.html");

?>
