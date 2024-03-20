const app = require('./server'); // Importa o app do server.js

const port = 3000;
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
