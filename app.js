const express = require('express')
const app = express()
const port = 3000







//servir archivos estaticos


app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/vistaDeportes', (req, res) => {
  res.send('/public/deportes.html')
})

app.get('/deportes', (req, res) => {


  const mysql = require('mysql')
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'adminbd',
    password: 'admin1234$',
    database: 'talentodb'
  })

  connection.connect()


  let query = 'SELECT * from deportes'
  conexion.query(query, (err, rows, fields) => {
    if (err) throw err

    res.send(rows)
  })

  connection.end()


})

app.listen(port, () => {
  console.log(`Talentoapijs listening on port ${port}`)
})