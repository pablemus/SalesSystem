const express = require('express');

const cors = require('cors');

require('dotenv').config();

const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true
}));
app.use(express.json());

const authRoutes = require('./auth/routes');
app.use('/auth', authRoutes);

const customerAuthRoutes = require('./authCustomer/routes');
app.use('/authCustomer', customerAuthRoutes);

const employeeRoutes = require('./employeeinfo/routes');
app.use('/api', employeeRoutes);


const customerInfoRoutes = require('./customerInfo/routes');
app.use('/apis', customerInfoRoutes);

app.get('/', (req, res) => {
  res.send('Api del sistema de ventas funcionando');
});

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});