const { Router } = require("express");
const { getTreinamentos } = require('../controllers/treinamentosController');

const router = Router();

router.get("/",getTreinamentos);

module.exports = router;