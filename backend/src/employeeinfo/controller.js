const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

const getEmployeeInfo = async (req, res) => {
    try {
    const {id, name, email} = req.query;
    const where = {
     role: 'employee',
     ...(id && { id: parseInt(id) }),
     ...(name && { name: { contains: name} }),
     ...(email && { email: { contains: email} }),
    };

    const employees = await prisma.user.findMany({ where });
    res.json({employees});
    } catch (error) {
        console.error('Error al obtener información de empleados:', error);
        res.status(500).json({ message: 'Error al obtener información de empleados' });
    }
}

const updateEmployeeInfo = async (req, res) => {
  const id = parseInt(req.params.id);
  const { name, email, role } = req.body;
  try {
    const updated = await prisma.user.update({
      where: { id },
      data: { ...(name && { name }), ...(email && { email }), ...(role && { role }) }
    });
    res.json({ message: "Empleado actualizado", updated });
  } catch (err) {
    res.status(400).json({ message: "Error al actualizar", error: err.message });
  }
};

module.exports = { getEmployeeInfo, updateEmployeeInfo };