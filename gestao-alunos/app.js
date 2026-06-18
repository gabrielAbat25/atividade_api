const express = require("express")
const rotaGestao = require("./routes/rotaGestao");

const app = express();
const port = 8000;

app.use("/alunos",rotaGestao);

app.listen(port, ()=>{
    console.log(`Servidor da Accenture rodando na porta ${port}!`)
});