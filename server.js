const express = require('express');
const cors = require('cors')
const veiculoRoutes = require('./routes/veiculoRoutes');

const app = express();

// Configuração específica para permitir apenas o domínio do seu frontend
app.use(cors({
    origin: 'http://localhost:4200'
}));

const port = 3000; // Você pode remover ou manter esta linha, dependendo da sua preferência

app.use(express.json());
app.use('/veiculos', veiculoRoutes);

module.exports = app; // Exporta o app
