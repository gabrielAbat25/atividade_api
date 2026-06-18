const fs = require("fs");

function getTodosTreinamentos() {
    const treinamentos = JSON.parse(fs.readFileSync("./data/treinamentos.json"));
    return treinamentos
}

module.exports = {
    getTodosTreinamentos
};