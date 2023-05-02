<?php
// Verificamos si se ha enviado el formulario
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Obtenemos los datos del formulario
  $nombre = $_POST['name'];
  $email = $_POST['email'];
  $asunto = $_POST['subject'];
  $mensaje = $_POST['message'];

  // Creamos un array para almacenar los errores
  $errores = array();

  // Validamos el campo nombre
  if (empty($nombre)) {
    $errores[] = "Por favor ingrese su nombre.";
  }

  // Validamos el campo email
  if (empty($email)) {
    $errores[] = "Por favor ingrese su correo electrónico.";
  } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errores[] = "Por favor ingrese un correo electrónico válido.";
  }

  // Validamos el campo asunto
  if (empty($asunto)) {
    $errores[] = "Por favor ingrese un asunto.";
  }

  // Validamos el campo mensaje
  if (empty($mensaje)) {
    $errores[] = "Por favor ingrese un mensaje.";
  }

  // Si no hay errores, enviamos el correo electrónico
  if (empty($errores)) {
    $destinatario = "simetroide.work@gmail.com";
    $header = "Enviado desde portfolio Nicolas Traczuk";
    $mensajeCompleto = $mensaje ."\n". "\nEmail que se quizo contactar con vos es: " . $email . "\n" . "\n Nombre del cliente: " . $nombre;
    mail($destinatario, $header, $asunto, $mensajeCompleto);
    $mensaje = "Su mensaje ha sido enviado exitosamente.";
  }
}
?>