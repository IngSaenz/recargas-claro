// server.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/recargar', (req, res) => {
    const { telefono, monto, tarjeta } = req.body;
    console.log(`Recarga para ${telefono} con C$${monto} - Tarjeta: ${tarjeta}`);
    res.json({ mensaje: `✅ Recarga de C$${monto} enviada a ${telefono}. Dinero transferido a Claro. ¡Conéctate y viaja a todo el mundo!` });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
