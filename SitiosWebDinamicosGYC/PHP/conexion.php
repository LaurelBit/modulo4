<?php
$servername = "localhost";
$username = "root";  // Usuario por defecto en XAMPP
$password = "";      // Contraseña vacía por defecto en XAMPP
$dbname = "bd_agenda";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}
?>
