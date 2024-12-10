/*
 Navicat MySQL Data Transfer

 Source Server         : Practica
 Source Server Type    : MySQL
 Source Server Version : 80036 (8.0.36)
 Source Host           : localhost:3306
 Source Schema         : workscrum

 Target Server Type    : MySQL
 Target Server Version : 80036 (8.0.36)
 File Encoding         : 65001

 Date: 03/05/2024 10:55:12
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for actividad_usuario
-- ----------------------------
DROP TABLE IF EXISTS `actividad_usuario`;
CREATE TABLE `actividad_usuario`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_actividad` int NOT NULL,
  `id_usuario` int NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `actividad-usuario`(`id_usuario` ASC) USING BTREE,
  INDEX `actividad-actividad`(`id_actividad` ASC) USING BTREE,
  CONSTRAINT `actividad-usuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `actividad-actividad` FOREIGN KEY (`id_actividad`) REFERENCES `actividades` (`id_actividad`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of actividad_usuario
-- ----------------------------

-- ----------------------------
-- Table structure for actividades
-- ----------------------------
DROP TABLE IF EXISTS `actividades`;
CREATE TABLE `actividades`  (
  `id_actividad` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `descripcion` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `fecha_inicio` date NOT NULL,
  `fecha_final` date NOT NULL,
  `id_prioridad` int NOT NULL,
  `id_estado` int NOT NULL,
  `id_sprint` int NOT NULL,
  `estatus` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '1',
  PRIMARY KEY (`id_actividad`) USING BTREE,
  INDEX `actividad-estado`(`id_estado` ASC) USING BTREE,
  INDEX `actividad-prioridad`(`id_prioridad` ASC) USING BTREE,
  INDEX `actividad-sprint`(`id_sprint` ASC) USING BTREE,
  CONSTRAINT `actividad-estado` FOREIGN KEY (`id_estado`) REFERENCES `estado` (`id_estado`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `actividad-prioridad` FOREIGN KEY (`id_prioridad`) REFERENCES `prioridad` (`id_prioridad`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `actividad-sprint` FOREIGN KEY (`id_sprint`) REFERENCES `sprints` (`id_sprint`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of actividades
-- ----------------------------

-- ----------------------------
-- Table structure for equipo
-- ----------------------------
DROP TABLE IF EXISTS `equipo`;
CREATE TABLE `equipo`  (
  `id_equipo` int NOT NULL AUTO_INCREMENT,
  `nombre_equipo` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `id_proyecto` int NOT NULL,
  PRIMARY KEY (`id_equipo`) USING BTREE,
  INDEX `equipo-proyecto`(`id_proyecto` ASC) USING BTREE,
  CONSTRAINT `equipo-proyecto` FOREIGN KEY (`id_proyecto`) REFERENCES `proyectos` (`id_proyecto`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of equipo
-- ----------------------------

-- ----------------------------
-- Table structure for estado
-- ----------------------------
DROP TABLE IF EXISTS `estado`;
CREATE TABLE `estado`  (
  `id_estado` int NOT NULL AUTO_INCREMENT,
  `estado` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id_estado`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of estado
-- ----------------------------

-- ----------------------------
-- Table structure for integrantes_equipo
-- ----------------------------
DROP TABLE IF EXISTS `integrantes_equipo`;
CREATE TABLE `integrantes_equipo`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_equipo` int NOT NULL,
  `id_usuario` int NOT NULL,
  `estatus` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `equipo-integrantes`(`id_equipo` ASC) USING BTREE,
  INDEX `usuario-integrantes`(`id_usuario` ASC) USING BTREE,
  CONSTRAINT `equipo-integrantes` FOREIGN KEY (`id_equipo`) REFERENCES `equipo` (`id_equipo`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `usuario-integrantes` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of integrantes_equipo
-- ----------------------------

-- ----------------------------
-- Table structure for prioridad
-- ----------------------------
DROP TABLE IF EXISTS `prioridad`;
CREATE TABLE `prioridad`  (
  `id_prioridad` int NOT NULL AUTO_INCREMENT,
  `prioridad` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id_prioridad`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of prioridad
-- ----------------------------

-- ----------------------------
-- Table structure for proyectos
-- ----------------------------
DROP TABLE IF EXISTS `proyectos`;
CREATE TABLE `proyectos`  (
  `id_proyecto` int NOT NULL AUTO_INCREMENT,
  `nombre_proy` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `descripcion` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `fecha_inicio` date NOT NULL,
  `id_estado` int NOT NULL,
  `estatus` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '1',
  PRIMARY KEY (`id_proyecto`) USING BTREE,
  INDEX `proyecto-estado`(`id_estado` ASC) USING BTREE,
  CONSTRAINT `proyecto-estado` FOREIGN KEY (`id_estado`) REFERENCES `estado` (`id_estado`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of proyectos
-- ----------------------------

-- ----------------------------
-- Table structure for rol
-- ----------------------------
DROP TABLE IF EXISTS `rol`;
CREATE TABLE `rol`  (
  `id_rol` int NOT NULL AUTO_INCREMENT,
  `rol` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id_rol`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of rol
-- ----------------------------
INSERT INTO rol (id_rol, rol) VALUES (1, 'ScrumMaster');
INSERT INTO rol (id_rol, rol) VALUES (2, 'ProductOwner');
INSERT INTO rol (id_rol, rol) VALUES (3, 'Developer');
-- ----------------------------
-- Table structure for sprints
-- ----------------------------
DROP TABLE IF EXISTS `sprints`;
CREATE TABLE `sprints`  (
  `id_sprint` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `id_proyecto` int NOT NULL,
  `fecha_inicio` date NOT NULL,
  `fecha_final` date NOT NULL,
  `descripcion` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `id_estado` int NOT NULL,
  `estatus` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '1',
  PRIMARY KEY (`id_sprint`) USING BTREE,
  INDEX `sprints-proyecto`(`id_proyecto` ASC) USING BTREE,
  INDEX `sprints-estado`(`id_estado` ASC) USING BTREE,
  CONSTRAINT `sprints-proyecto` FOREIGN KEY (`id_proyecto`) REFERENCES `proyectos` (`id_proyecto`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `sprints-estado` FOREIGN KEY (`id_estado`) REFERENCES `estado` (`id_estado`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sprints
-- ----------------------------

-- ----------------------------
-- Table structure for usuarios
-- ----------------------------
DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE `usuarios`  (
  `id_usuario` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `email` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `id_rol` int NOT NULL,
  PRIMARY KEY (`id_usuario`) USING BTREE,
  INDEX `usuario-rol`(`id_rol` ASC) USING BTREE,
  CONSTRAINT `usuario-rol` FOREIGN KEY (`id_rol`) REFERENCES `rol` (`id_rol`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of usuarios
-- ----------------------------

SET FOREIGN_KEY_CHECKS = 1;
