const {getTodosProjetos,getProjetoPorId} = require("../services/projetosService");

function getProjetos(req,res) {
    try{
        const Projetos = getTodosProjetos();
        res.send(Projetos);
    } catch(error) {
        res.status(500);
        res.send(error.message);
    }
}

function getProjetosID(req,res) {
    try{
        const id = req.params.id;

        const projetos = getProjetoPorId(id);

        res.send(projetos);
    } catch(error) {
        res.status(500);
        res.send(error.message);
    }
}

module.exports = {
    getProjetos,
    getProjetosID
};