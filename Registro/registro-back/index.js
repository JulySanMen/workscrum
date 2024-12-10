require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./src/routes/users');
const cors = require('cors');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();
const PORT = process.env.PORT || 3000;


// Middleware
app.use(cors());
app.use(bodyParser.json());

// Configuración de Swagger
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Registro de Usuarios',
      version: '1.0.0',
      description: 'API para el manejo de usuarios en el sistema',
    },
    servers: [
      {
        url: `http://localhost:${PORT}`, // Cambia según el entorno
      },
    ],
  },
  apis: ['./src/routes/*.js'], // Ruta de los archivos donde están tus endpoints
};

// Inicializar Swagger
const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Rutas de tu aplicación
app.use('/api/users', userRoutes);

// Ruta básica para la raíz
app.get('/', (req, res) => {
  res.send('Bienvenido a la API de Registro de Usuarios');
});

// Inicio del servidor
app.listen(PORT, '0.0.0.0',() => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
  console.log(`Documentación disponible en http://localhost:${PORT}/api-docs`);
});
