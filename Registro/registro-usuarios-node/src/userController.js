const bcrypt = require('bcrypt');
const crypto = require('crypto');
const db = require('./db');

// Clave secreta para encriptar y desencriptar datos
const SECRET_KEY = 'clave_admin_12345'; // Cambia esto por una clave fuerte

// Función para encriptar datos
const encryptData = (data) => {
  const cipher = crypto.createCipher('aes-256-cbc', SECRET_KEY);
  let encrypted = cipher.update(data, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
};

// Registrar un usuario
const registerUser = async (req, res) => {
  const { nombre, email, password, id_rol } = req.body;

  if (!nombre || !email || !password || !id_rol) {
    return res.status(400).json({ message: 'Todos los campos son obligatorios.' });
  }

  try {
    // Generar un hash para la contraseña
    const saltRounds = 10; // Número de rondas de encriptación
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Encriptar otros datos sensibles
    const encryptedNombre = encryptData(nombre);
    const encryptedEmail = encryptData(email);

    const [result] = await db.query(
      'INSERT INTO usuarios (nombre, email, password, id_rol) VALUES (?, ?, ?, ?)',
      [encryptedNombre, encryptedEmail, hashedPassword, id_rol]
    );

    res.status(201).json({ message: 'Usuario registrado con éxito', userId: result.insertId });
  } catch (error) {
    res.status(500).json({ message: 'Error al registrar usuario', error });
  }
};

// Obtener todos los roles
const getRoles = async (req, res) => {
  try {
    const [rol] = await db.query('SELECT * FROM rol');
    res.status(200).json(rol); // Devuelve los roles encontrados
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los roles', error });
  }
};

module.exports = { registerUser, getRoles };
