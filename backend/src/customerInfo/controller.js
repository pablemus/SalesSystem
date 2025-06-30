const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

const getcxinfo = async (req, res) => {
    try {
    const {phone, name, email} = req.query;
    const where = {
     role: 'customer',
     ...(phone && { phone: { contains: phone } }),
     ...(name && { name: { contains: name} }),
     ...(email && { email: { contains: email} }),
    };

    const customers = await prisma.customer.findMany({ where });
    res.json({customers});
    } catch (error) {
        console.error('Error al obtener información de clientes:', error);
        res.status(500).json({ message: 'Error al obtener información de clientes' });
    }
}

const updatecxInfo = async (req, res) => {
  const id = parseInt(req.params.id);
  const { name, email, address, phone, birthday } = req.body;
  try {
    const updated = await prisma.customer.update({
      where: { id },
      data: { ...(name && { name }), ...(email && { email }), ...(address && { address }), ...(phone && { phone }), ...(birthday && { birthday }) }
    });
    res.json({ message: "Cliente actualizado", updated });
  } catch (err) {
    res.status(400).json({ message: "Error al actualizar", error: err.message });
  }
};

module.exports = { getcxinfo, updatecxInfo };