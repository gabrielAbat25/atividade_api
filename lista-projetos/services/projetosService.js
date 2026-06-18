const fs = require("fs");

function getTodosProjetos() {
    const projetos = JSON.parse(fs.readFileSync("./data/projetos.json"));
    return projetos;
};

function getProjetoPorId(id){
    const projetos = JSON.parse(fs.readFileSync("./data/projetos.json"));
    return projetos.filter(projeto => projeto.id === Number(id));
}

module.exports = {
    getTodosProjetos,
    getProjetoPorId
};