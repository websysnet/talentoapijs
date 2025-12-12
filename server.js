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

  try {


    let query = 'SELECT * from deporte'
    connection.query(query, (err, rows, fields) => {
      if (err) throw err

      if (rows.length === 0) {
        res.status(404).send({ message: 'No se encontraron deportes' })
        return
      }

      res.send(rows)
    })
  } catch (error) {
    res.status(500).send({ message: 'Error del servidor' })
  }


})


// Obtener un deporte por ID
app.get('/deportes/:id', (req, res) => {

  if (isNaN(req.params.id)) {
    res.status(400).send({ message: 'ID invalido' })
    return
  }
  if (req.params.id <= 0) {
    res.status(400).send({ message: 'ID debe ser mayor que cero' })
    return
  }

  const id = req.params.id

  let query = `SELECT * from deporte where id=${id}`

  connection.query(query, (err, rows, fields) => {
    if (err) throw err

    if (rows.length === 0) {
      res.status(404).send({ message: 'Deporte no encontrado' })
      return
    }

    res.send(rows)
  })
})

app.get('/deportes/nombre/:nombre', (req, res) => {

  if (!isNaN(req.params.nombre)) {
    res.status(400).send({ message: 'Nombre invalido' })
    return
  }
  const nombre = req.params.nombre

  let query = `SELECT * from deporte where nombre_deporte like '${nombre}'`

  connection.query(query, (err, rows, fields) => {
    if (err) throw err

    if (rows.length === 0) {
      res.status(404).send({ message: 'Deporte no encontrado' })
      return
    }

    res.send(rows)
  })
})

app.get('/aspirantes', (req, res) => {
  let query = 'SELECT * from persona'
  connection.query(query, (err, rows, fields) => {
    if (err) throw err

    res.send(rows)
  })
})

//aspirantes  por ID
app.get('/aspirantes/:cedula', (req, res) => {
  const cedula = req.params.cedula

  let query = `SELECT * from persona where cedula=${cedula}`

  connection.query(query, (err, rows, fields) => {
    if (err) throw err

    if (rows.length === 0) {
      res.status(404).send({ message: 'Aspirante no encontrado' })
      return
    }

    res.send(rows)
  })
})


//get entrenadores

app.get('/entrenadores', (req, res) => {
  let query = 'SELECT * from entrenador'
  connection.query(query, (err, rows, fields) => {
    if (err) throw err

    res.send(rows)
  })
})

//entrenadores por ID
app.get('/entrenadores/:cedula', (req, res) => {
  const cedula = req.params.cedula

  let query = `SELECT * from entrenador where cedula_entrenador=${cedula}`

  connection.query(query, (err, rows, fields) => {
    if (err) throw err

    if (rows.length === 0) {
      res.status(404).send({ message: 'Entrenador no encontrado' })
      return
    }

    res.send(rows)
  })
})

//get entrenadores por nivel
app.get('/entrenadores/nivel/:nivel', (req, res) => {
  const nivel = req.params.nivel

  let query = `SELECT * from entrenador where nivel='${nivel}'`

  connection.query(query, (err, rows, fields) => {
    if (err) throw err

    if (rows.length === 0) {
      res.status(404).send({ message: 'Entrenador no encontrado' })
      return
    }

    res.send(rows)
  })
})

app.listen(port, () => {
  console.log(`Talentoapijs app listening on port ${port}`)
})