const express = require('express')
const app = express()
const port = 3000



//servir archivos estaticos


app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/vistaDeportes',(req,res)=>{
    res.send('/public/deportes.html')
})

app.get('/deportes',(req,res)=>{

    res.send("Lista de deportes")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})