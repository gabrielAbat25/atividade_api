const { Router } = require("express");
const { getProjetos,getProjetosID } = require("../controllers/projetosController");

const router = Router();

router.get("/",getProjetos);
router.get("/:id",getProjetosID);

module.exports = router;