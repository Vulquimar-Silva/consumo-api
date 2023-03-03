const cors = require('cors')
const axios = require('axios')
const express = require('express')
const app = express()

app.use(cors())
const port = 5555

app.get('/', async(req, res) => {
    return res.json({ message: 'Para testes use as rotas /users ou /albums'})
})

app.get('/users', async(req, res) => {
    const {data} = await axios('https://jsonplaceholder.typicode.com/users')
    return res.json(data)
})

app.get('/albums', async(req, res) => {
    const {data} = await axios('https://jsonplaceholder.typicode.com/albums')
    return res.json(data)
})

// Usando FETCH para consumir a API jsonplaceholder
// Filtrando recursos com FETCH
// --------------------------

// app.get('/', (req, res) => {

//     fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
//         .then((response) => response.json())
//         .then((json) => (
//             console.log(json),
//             res.send(json)
//         ));
// })

// ------------------------------

// Atualizando um recurso com FETCH
// --------------------------
// app.get('/PUT', (req, res) => {

//     fetch('https://jsonplaceholder.typicode.com/posts/1', {
//         method: 'PUT',
//         body: JSON.stringify({
//             id: 1,
//             title: 'Se fooo',
//             body: 'Troia dos brabo, corre para as colinas',
//             userId: 1,
//         }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     })
//         .then((response) => response.json())
//         .then((json) => (
//             console.log(json),
//             res.send(json)
//         ));
// })
// ------------------------------

app.listen(port, console.log('API is up'))