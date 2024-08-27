const express = require('express')
const cors = require('cors')
require('dotenv').config();

const autoRoutes = require('./routes/autoRoutes')
const marcaRoutes = require('./routes/marcaRoutes');


const app = express();
app.use(cors());
app.use(express.json());
app.use('./uploads',
express.static('uploads'));

app.use('/api/autos', autoRoutes);
app.use('/api/marcas', marcaRoutes);

const PORT =process.env.PORT || 5000;
app.listen(PORT, () => console.log('Servidor corriendo en el puerto ${PORT}'));
