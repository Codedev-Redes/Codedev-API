require('dotenv').config();

// Obtiene la aplicación
const app = require('./server');
// Requiere la base de datos
require('./database');

const port = process.env.PORT || 80; // Obtener el puerto del entorno o usar el puerto 80 por defecto

app.listen(port, () => {
    console.log(`Server listening on port ${port}...`);
});