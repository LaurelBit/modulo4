<?php
include 'conexion.php';

// Verifica si se pasó un ID para eliminar
if (isset($_GET['id'])) {
    $id = $_GET['id'];

    // Consulta SQL para eliminar el registro
    $sql = "DELETE FROM agenda WHERE id=$id";

    if ($conn->query($sql) === TRUE) {
        echo "Registro eliminado con éxito";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
} else {
    echo "ID no especificado para eliminar.";
}

$conn->close();
?>
