const { Router } = require("express");
const { getAlunos,getAlunoID } = require("../controllers/gestaoController");

const router = Router();

router.get("/",getAlunos);
router.get("/:id",getAlunoID);

router.post("/", (req, res) => {
    res.send("Adicionando aluno a lista");
});

router.patch("/",(req,res)=>{
    res.send("Atualizando aluno da lista")
})

router.delete("/",(req,res)=>{
    res.send("Deletando aluno da lista")
})

module.exports = router;