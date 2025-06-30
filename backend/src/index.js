const express = require('express');

const cors = require('cors');

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const authRoutes = require('./auth/routes');
app.use('/auth', authRoutes);


app.get('/', (req, res) => {
  res.send('Api del sistema de ventas funcionando');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});