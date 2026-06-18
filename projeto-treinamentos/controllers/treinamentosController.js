const { getTodosTreinamentos } = require("../services/treinamentosService");

function getTreinamentos(req, res){
    try{
        const treinamentos = getTodosTreinamentos();
        res.send(treinamentos);
    } catch (error){
        res.status(500);
        res.send(error.message);
    }
}

module.exports= {getTreinamentos};