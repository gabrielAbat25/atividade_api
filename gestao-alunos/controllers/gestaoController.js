const {getTodosAlunos,getAlunoPorId} = require("../services/gestaoService");

function getAlunos(req,res) {
    try{
        const alunos = getTodosAlunos();
        res.send(alunos);
    } catch(error) {
        res.status(500);
        res.send(error.message);
    }
}

function getAlunoID(req,res) {
    try{
        const id = req.params.id;

        const alunos = getAlunoPorId(id);

        res.send(alunos);
    } catch(error) {
        res.status(500);
        res.send(error.message);
    }
}

module.exports = {
    getAlunos,
    getAlunoID
};