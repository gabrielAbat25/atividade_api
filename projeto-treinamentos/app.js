const express = require("express");
const rotasTreinamentos = require("./routes/rotasTreinamentos");

const app = express();
const port = 8000;

app.use('/treinamentos', rotasTreinamentos);

app.listen(port, ()=>{
    console.log(`Servidor da SoulCode rodando na porta ${port}!`);
});