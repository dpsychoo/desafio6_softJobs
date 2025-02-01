const express = require('express');
const { registrarUsuario, loginUsuario, obtenerUsuario } = require('../controllers/usuariosController');
const { verificarToken, verificarCredenciales } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/usuarios', registrarUsuario);

router.post('/login', loginUsuario);

router.get('/usuarios', verificarToken, obtenerUsuario);

module.exports = router;
