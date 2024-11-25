require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

// Crear la aplicación de Express
const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Importar y usar rutas de todas las APIs
const productRoutes = require('./productos/routes/productRoutes');
const userRoutes = require('./usuarios/routes/userRoutes');
const recipeRoutes = require('./recetas/routes/recipeRoutes');
const reviewRoutes = require('./resenas/routes/reviewRoutes');
const orderRoutes = require('./carro/routes/orderRoutes');


// Configurar las rutas
app.use('/products', productRoutes);
app.use('/users', userRoutes);
app.use('/recipes', recipeRoutes);
app.use('/reviews', reviewRoutes);
app.use('/orders', orderRoutes);

// Ruta base para probar que el servidor está activo
app.get('/', (req, res) => {
  res.send('Bienvenido a la API general de PalmiCafe');
});

// Puerto de la aplicación
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto: ${PORT}`);
});
