<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Agenda</title>
    <link rel="stylesheet" href="assets/style.css">
</head>
<body>
    <h1>Agenda</h1>

    <!-- Formulario para insertar un nuevo registro -->
    <form action="insertar.php" method="post">
        <input type="text" name="nombres" placeholder="Nombres" required><br>
        <input type="text" name="apellidos" placeholder="Apellidos" required><br>
        <input type="text" name="direccion" placeholder="Dirección" required><br>
        <input type="text" name="telefono" placeholder="Teléfono" required><br>
        <input type="submit" value="Insertar">
    </form>

    <hr>

    <!-- Mostrar registros -->
    <h2>Registros:</h2>
    <?php
        include 'leer.php';  // Mostrar registros desde la base de datos
    ?>
</body>
</html>
