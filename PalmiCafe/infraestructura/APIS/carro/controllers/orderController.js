const { PrismaClient } = require('../generated/carro');

const prisma = new PrismaClient();

exports.addToOrder = async (req, res) => {
  try {
    res.status(200).json({ message: 'Producto añadido al pedido' });
  } catch (error) {
    res.status(500).json({ error: 'No se pudo añadir al pedido' });
  }
};

exports.checkoutOrder = async (req, res) => {
  try {
    res.status(200).json({ message: 'Pedido finalizado con éxito' });
  } catch (error) {
    res.status(500).json({ error: 'No se pudo finalizar el pedido' });
  }
};
