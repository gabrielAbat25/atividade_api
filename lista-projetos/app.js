const express = require("express")
const rotaProjetos = require("./routes/rotaProjetos");

const app = express();
const port = 8000;

app.use("/projetos",rotaProjetos);

app.listen(port, ()=>{
    console.log(`Servidor da Accenture rodando na porta ${port}!`)
});