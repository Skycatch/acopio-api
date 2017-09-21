# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.7.18)
# Database: acopio-db
# Generation Time: 2017-09-21 23:06:27 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table CentroDeAcopioProductos
# ------------------------------------------------------------

DROP TABLE IF EXISTS `CentroDeAcopioProductos`;

CREATE TABLE `CentroDeAcopioProductos` (
  `producto_id` int(11) NOT NULL,
  `centro_de_acopio_id` int(11) NOT NULL,
  PRIMARY KEY (`producto_id`,`centro_de_acopio_id`),
  KEY `centro_de_acopio_id` (`centro_de_acopio_id`),
  CONSTRAINT `centrodeacopioproductos_ibfk_1` FOREIGN KEY (`producto_id`) REFERENCES `Productos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `centrodeacopioproductos_ibfk_2` FOREIGN KEY (`centro_de_acopio_id`) REFERENCES `CentrosDeAcopio` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table CentroDeAcopioResponsables
# ------------------------------------------------------------

DROP TABLE IF EXISTS `CentroDeAcopioResponsables`;

CREATE TABLE `CentroDeAcopioResponsables` (
  `centro_de_acopio_id` int(11) NOT NULL,
  `responsable_id` int(11) NOT NULL,
  PRIMARY KEY (`centro_de_acopio_id`,`responsable_id`),
  KEY `responsable_id` (`responsable_id`),
  CONSTRAINT `centrodeacopioresponsables_ibfk_1` FOREIGN KEY (`centro_de_acopio_id`) REFERENCES `CentrosDeAcopio` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `centrodeacopioresponsables_ibfk_2` FOREIGN KEY (`responsable_id`) REFERENCES `Responsables` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table CentrosDeAcopio
# ------------------------------------------------------------

DROP TABLE IF EXISTS `CentrosDeAcopio`;

CREATE TABLE `CentrosDeAcopio` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) DEFAULT NULL,
  `direccion` varchar(255) DEFAULT NULL,
  `latitud` double DEFAULT NULL,
  `longitud` double DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table CentrosDeAcopioProductos
# ------------------------------------------------------------

DROP TABLE IF EXISTS `CentrosDeAcopioProductos`;

CREATE TABLE `CentrosDeAcopioProductos` (
  `centro_de_acopio_id` int(11) NOT NULL,
  `producto_id` int(11) NOT NULL,
  PRIMARY KEY (`centro_de_acopio_id`,`producto_id`),
  KEY `producto_id` (`producto_id`),
  CONSTRAINT `centrosdeacopioproductos_ibfk_1` FOREIGN KEY (`centro_de_acopio_id`) REFERENCES `CentrosDeAcopio` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `centrosdeacopioproductos_ibfk_2` FOREIGN KEY (`producto_id`) REFERENCES `Productos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table Productos
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Productos`;

CREATE TABLE `Productos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) DEFAULT NULL,
  `detalle` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table Responsables
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Responsables`;

CREATE TABLE `Responsables` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) DEFAULT NULL,
  `telefono` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `twitter` varchar(255) DEFAULT NULL,
  `facebook` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;




/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
