const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

const usuariosRoutes = require('./routes/usuarios');

const app = express();

// mdd
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.use('/api', usuariosRoutes); // r

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
