require('dotenv').config();

const config = {
    db: {
        host: process.env.DB_HOST || 'host',
        name: process.env.DB_NAME || 'dbName',
        user: process.env.DB_USER || 'username',
        password: process.env.DB_PASS || '1234',
        port: process.env.DB_PORT || '5432',
        dialect: process.env.DB_DIALECT || 'postgres',
        uri: process.env.DB_URI || 'postgres://user:pass@example.com:5432/dbname'
    },
    app: {
        port: process.env.port || '3001',
        clientHost: process.env.CLIENT_HOST || 'http://localhost:3000',
    },
};

module.exports = config;