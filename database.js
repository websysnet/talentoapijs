function conectarBD() {
    const connection = mysql.createConnection({
        host: "localhost",
        user: "adminbd",
        password: "Admin123456$",
        database: "talentodb"
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

const mysql = require('mysql');

module.exports = { conectarBD }; 