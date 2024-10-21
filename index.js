import express from "express";
import userRouters from './src/routes/user.routes.js';
const app = express();

app.use(express.json());
app.use(userRouters)
//const users = []


//Toda API tem

//Método (GET, POST, PUT, PATCH, DELETE)
//Nome da rota {Exemplo: (/users)} (vai abrir em => http:localhost:300//users)
// Callback funcions (Onde executamos o backend (lógica, regras de negócio))

//app.post('/users', (req, res) => {
  //  const body = req.body
    //users.push(body)
    //res.status(201).send("usuário criado com sucesso")
//});

//app.get('/users', (req,res) => {
  //  res.send({message: "Nomes dos usuarios", users})
//})


//porta onde a rota vai abrir
app.listen(3000, () => {
    console.log("Server is Running on port 3000");
});
