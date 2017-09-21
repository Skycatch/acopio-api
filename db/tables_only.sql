# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: acopio-db.cnc2gbzsnrq2.us-west-2.rds.amazonaws.com (MySQL 5.6.35-log)
# Database: acopio
# Generation Time: 2017-09-21 07:05:24 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table CentroDeAcopioResponsables
# ------------------------------------------------------------

DROP TABLE IF EXISTS `CentroDeAcopioResponsables`;

CREATE TABLE `CentroDeAcopioResponsables` (
  `centro_de_acopio_id` int(11) NOT NULL,
  `responsable_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table CentrosDeAcopio
# ------------------------------------------------------------

DROP TABLE IF EXISTS `CentrosDeAcopio`;

CREATE TABLE `CentrosDeAcopio` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(400) DEFAULT NULL,
  `direccion` varchar(1000) DEFAULT NULL,
  `latitud` double DEFAULT NULL,
  `longitud` double DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table CentrosDeAcopioProductos
# ------------------------------------------------------------

DROP TABLE IF EXISTS `CentrosDeAcopioProductos`;

CREATE TABLE `CentrosDeAcopioProductos` (
  `centro_de_acopio_id` int(11) NOT NULL,
  `producto_id` int(11) NOT NULL,
  `falta` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table Productos
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Productos`;

CREATE TABLE `Productos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  `detalle` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table Responsables
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Responsables`;

CREATE TABLE `Responsables` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(200) DEFAULT NULL,
  `email` varchar(200) DEFAULT NULL,
  `telefono` varchar(45) DEFAULT NULL,
  `facebook` varchar(80) DEFAULT NULL,
  `twitter` varchar(80) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;




/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
