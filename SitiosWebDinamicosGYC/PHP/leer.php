<?php
include 'conexion.php';

// Consulta SQL para obtener todos los registros
$sql = "SELECT * FROM agenda";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "<table border='1'>";
    echo "<tr><th>ID</th><th>Nombres</th><th>Apellidos</th><th>Dirección</th><th>Teléfono</th><th>Acciones</th></tr>";
    while($row = $result->fetch_assoc()) {
        echo "<tr>";
        echo "<td>" . $row["id"]. "</td>";
        echo "<td>" . $row["nombres"]. "</td>";
        echo "<td>" . $row["apellidos"]. "</td>";
        echo "<td>" . $row["direccion"]. "</td>";
        echo "<td>" . $row["telefono"]. "</td>";
        echo "<td>
                <a href='actualizar.php?id=" . $row["id"] . "'>Actualizar</a> | 
                <a href='eliminar.php?id=" . $row["id"] . "'>Eliminar</a>
              </td>";
        echo "</tr>";
    }
    echo "</table>";
} else {
    echo "0 resultados";
}

$conn->close();
?>
