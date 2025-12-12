const express = require('express')
const app = express()
const port = 3000
 const { conectarBD } = require('./database.js')

const connection = conectarBD() 


//servir archivos estaticos


app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/vistaDeportes', (req, res) => {
  res.send('/public/deportes.html')
})


// Obtener todos los deportes
app.get('/deportes', (req, res) => {


  let query = 'SELECT * from deporte'
  connection.query(query, (err, rows, fields) => {
    if (err) throw err

    res.send(rows)
  })

  connection.end()


})


// Obtener un deporte por ID
app.get('/deportes/:id', (req, res) => {
  const id = req.params.id

  let query = `SELECT * from deporte where id=${id}`
  console.log(query)
  connection.query(query, (err, rows, fields) => {
    if (err) throw err

    res.send(rows[0])
  })

  connection.end()

})

app.listen(port, () => {
  console.log(`Talentoapijs app listening on port ${port}`)
})