const cors = require('cors')
const express = require('express')
const app = express()
const data = require('./data')

const port = 3333

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    return res.json({ message: 'Acesse a rota /users para encontrar os dados'})
})

app.get('/users', (req, res) => {
    return res.json(data)
})

app.listen(port, console.log('API is up'))