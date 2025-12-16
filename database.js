const mysql = require('mysql2');
const host = process.env.DB_HOST ;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_NAME ;

function conectarBD() {
    const connection = mysql.createConnection({
        host,
        user,
        password,
        database
    });

    connection.connect((err) => {
        if (err) {
            console.error('Error connecting to the database:', err);
            return;
        }
        console.log('Connected to the MySQL database.');
    });

    return connection;
}

module.exports = { conectarBD };