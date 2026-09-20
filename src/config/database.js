const mysql = require('mysql2/promise');

require('dotenv').config();

const pool = mysql.createPool({

    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    waitForConnections: true,   // se todas as conexões que o pool estiverem ocupadas, espera uma outra ficar em vez de apresentar um erro no momento da execução
    connectionLimit: 10,    // número máximo de conexões que o pool pode mantém abertas ao mesmo tempo.
    queueLimit: 0           //limite de requisições, na fila.. como é 0 nunca é recusado ppor causa da fila, só aguarda.
});

module.exports = pool;