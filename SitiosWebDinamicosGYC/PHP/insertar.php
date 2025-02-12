<?php
include 'conexion.php';

// Recibe los datos del formulario
$nombres = $_POST['nombres'];
$apellidos = $_POST['apellidos'];
$direccion = $_POST['direccion'];
$telefono = $_POST['telefono'];

// Consulta SQL para insertar los datos
$sql = "INSERT INTO agenda (nombres, apellidos, direccion, telefono) 
        VALUES ('$nombres', '$apellidos', '$direccion', '$telefono')";

if ($conn->query($sql) === TRUE) {
    echo "Nuevo registro creado con éxito";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
