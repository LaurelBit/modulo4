<?php
include 'conexion.php';

// Verifica si se pasó un ID para actualizar
if (isset($_GET['id'])) {
    $id = $_GET['id'];

    // Obtener los datos actuales del registro
    $sql = "SELECT * FROM agenda WHERE id=$id";
    $result = $conn->query($sql);
    $row = $result->fetch_assoc();

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        // Recibe los datos del formulario
        $nombres = $_POST['nombres'];
        $apellidos = $_POST['apellidos'];
        $direccion = $_POST['direccion'];
        $telefono = $_POST['telefono'];

        // Consulta SQL para actualizar los datos
        $sql = "UPDATE agenda SET nombres='$nombres', apellidos='$apellidos', direccion='$direccion', telefono='$telefono' WHERE id=$id";

        if ($conn->query($sql) === TRUE) {
            echo "Registro actualizado con éxito";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    }
} else {
    echo "ID no especificado para actualizar.";
}

$conn->close();
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Actualizar Registro</title>
</head>
<body>
    <h2>Actualizar Registro</h2>
    <form action="actualizar.php?id=<?php echo $row['id']; ?>" method="post">
        Nombres: <input type="text" name="nombres" value="<?php echo $row['nombres']; ?>" required><br>
        Apellidos: <input type="text" name="apellidos" value="<?php echo $row['apellidos']; ?>" required><br>
        Dirección: <input type="text" name="direccion" value="<?php echo $row['direccion']; ?>" required><br>
        Teléfono: <input type="text" name="telefono" value="<?php echo $row['telefono']; ?>" required><br>
        <input type="submit" value="Actualizar">
    </form>
</body>
</html>
