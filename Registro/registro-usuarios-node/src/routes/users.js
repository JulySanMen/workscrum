// AQUI SE DEFINNE LAS RUTAS PARA ACCEDER A MI MICROSERVICIO

const express = require('express');
const { registerUser, getRoles } = require('../userController');
const router = express.Router();

/**
 * @swagger
 * /api/users/register:
 *   post:
 *     summary: Registra un nuevo usuario
 *     description: Endpoint para registrar un usuario en el sistema.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: Bryan
 *               email:
 *                 type: string
 *                 example: bryan@example.com
 *               password:
 *                 type: string
 *                 example: 123456
 *               id_rol:
 *                 type: integer
 *                 example: 2
 *     responses:
 *       201:
 *         description: Usuario registrado con éxito.
 *       400:
 *         description: Error en los datos enviados.
 */
router.post('/register', registerUser);

/**
 * @swagger
 * /api/users/roles:
 *   get:
 *     summary: Obtiene todos los roles
 *     description: Devuelve una lista de roles disponibles en el sistema.
 *     responses:
 *       200:
 *         description: Lista de roles obtenida con éxito.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   rol:
 *                     type: string
 *                     example: Admin
 *       500:
 *         description: Error en el servidor.
 */
router.get('/roles', getRoles);

module.exports = router;
