const jwt = require('jsonwebtoken');
require('dotenv').config();

// V.tkn
const verificarToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(403).json({ error: 'Token requerido' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ error: 'Token inválido' });
    }
};

const verificarCredenciales = (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ error: 'Credenciales incompletas' });
    next();
};

module.exports = { verificarToken, verificarCredenciales };