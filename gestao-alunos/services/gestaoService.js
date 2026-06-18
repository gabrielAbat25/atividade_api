const fs = require("fs");

function getTodosAlunos() {
    const alunos = JSON.parse(fs.readFileSync("./data/alunos.json"));
    return alunos;
};

function getAlunoPorId(id){
    const alunos = JSON.parse(fs.readFileSync("./data/alunos.json"));
    return alunos.filter(alunos => alunos.id === Number(id));
}

module.exports = {
    getTodosAlunos,
    getAlunoPorId
};