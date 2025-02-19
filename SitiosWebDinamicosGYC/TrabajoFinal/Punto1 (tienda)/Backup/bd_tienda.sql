-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 18-02-2025 a las 03:04:08
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bd_tienda`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` tinyint(4) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `precio` decimal(9,2) NOT NULL,
  `imagen` varchar(30) NOT NULL,
  `detalle` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `precio`, `imagen`, `detalle`) VALUES
(1, 'Rosa Paz', 12.00, '1739839282847.jpg', 'Rosa de color rosa claro.'),
(2, 'Rosa Belleza', 15.00, '1739839363398.jpg', 'Rosa de color rosa con bordes blancos.'),
(3, 'Rosa Amor', 22.00, '1739839396927.jpg', 'Rosa de color rosa intenso'),
(4, 'Rosa Alegría', 25.00, '1739839430217.jpg', 'Rosa de color amarillo espumoso.'),
(5, 'Rosa Fuego', 25.00, '1739839465674.jpg', 'Rosa de color amarillo con bordes rojos'),
(6, 'Rosa Pasión', 21.00, '1739839517277.jpg', 'Rosa de color rojo'),
(7, 'Rosa Rubí', 27.00, '1739839549506.jpg', 'Rosa de color rojo');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` tinyint(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
