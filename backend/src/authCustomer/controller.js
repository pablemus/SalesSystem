const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET
const register = async (req, res) => {
  const { name, email, password, address, phone, birthday } = req.body;

  if (!name || !email || !password || !address || !phone || !birthday) {
    return res.status(400).json({ message: "Todos los campos son obligatorios" });
  }

  const existingUser = await prisma.customer.findUnique({ where: { email } });
  if (existingUser) {
    return res.status(400).json({ message: "Este correo ya está en uso" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const customer = await prisma.customer.create({
    data: {
      name,
      email,
      password: hashedPassword,
      address,
      phone,
      birthday
    }
  });

  res.status(201).json({
    message: "Usuario creado con éxito",
    customer: {
      id: customer.id,
      name: customer.name,
      email: customer.email,
      address: customer.address,
      phone: customer.phone,
      birthday: customer.birthday
    }
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const customer = await prisma.customer.findUnique({ where: { email } });
  if (!customer) {
    return res.status(400).json({ message: "Correo o contraseña incorrectos" });
  }

  const valid = await bcrypt.compare(password, customer.password);
  if (!valid) {
    return res.status(400).json({ message: "Correo o contraseña incorrectos" });
  }

  const token = jwt.sign({ id: customer.id, role: customer.role }, JWT_SECRET, {
    expiresIn: '2h',
  });

  res.json({
    message: "Login exitoso",
    token,
    customer: {
      id: customer.id,
      name: customer.name,
      email: customer.email,
    }
  });

};

module.exports = { register, login };
