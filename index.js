const express = require('express')
const app = express()

app.use(express.json());
const users = []


//toda API tem

//Método (GET, POST, PUT, PATCH, DELETE)
//Name (/+nome no plural)
// Callback funcions (Onde executamos o backend (lógica, regras de negócio))



app.post('/users', (req, res) => {
    const body = req.body
    users.push(body)
    res.status(201)
});

app.get('/users', (req,res) => {
    res.json()
})



app.listen(3000, () => {
    console.log("Server is Running on port 3000");
});