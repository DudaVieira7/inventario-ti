const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const equipamentoRoutes = require('./routes/equipamentoRoutes');
const app = express();

app.use(cors()); // habilita o CORS para todas as rotas
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));


app.use('/api/equipamentos', equipamentoRoutes);


const PORT = process.env.PORT||3000;

app.listen(PORT,() =>{
    console.log(`Servidor rodando em http://localhost:${PORT}`);
})
