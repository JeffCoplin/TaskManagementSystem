const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const taskRoutes = require('./routes/tasks');

dotenv.config();
const app = express(); 

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes); 

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB conectado'))
  .catch(err => console.log('Error en conexión:', err));

app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});
