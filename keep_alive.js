const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Estoy activo');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));

const https = require('https');

setInterval(() => {
    https.get('https://9211317d-43ae-4e5f-bee4-6fc7b243b9be-00-13mmu0h1u9sfs.spock.replit.dev/');
    console.log('Ping enviado para mantener activo');
}, 60000); // Cada 1 minuto