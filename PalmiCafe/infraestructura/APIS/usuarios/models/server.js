const express = require('express');
const cors = require('cors');
const path = require('path'); // Para manejar rutas absolutas

class Server {
  constructor() {
    this.app = express();
    this.port = 3500; // Cambiado al puerto 3500
    this.paths = {
      users: '/users',
    };

    this.middlewares();
    this.routes();
  }

  middlewares() {
    const corsOptions = {
      origin: '*', // Cambiar si tienes restricciones de CORS
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      allowedHeaders: ['Content-Type', 'Authorization'],
    };
    this.app.use(cors(corsOptions));
    this.app.use(express.json());
  }

  routes() {
    // Usando una ruta absoluta para evitar problemas de ubicación
    const userRoutes = require(path.join(__dirname, '../routes/user.routes'));
    this.app.use(this.paths.users, userRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor funcionando en el puerto: ${this.port}`);
    });
  }
}

module.exports = Server;
