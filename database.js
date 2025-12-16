function conectarBD() {
    const connection = mysql.createConnection({
        host: host,
        user: user,
        password: password,
        database: database
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
``
const mysql = require('mysql');
const host = process.env.DB_HOST; 
const user = process.env.DB_USER;   
const password = process.env.DB_PASSWORD ;
const database = process.env.DB_NAME ;

module.exports = { conectarBD }; 