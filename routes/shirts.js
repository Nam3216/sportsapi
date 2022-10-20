var express = require('express');
var router = express.Router();
const shirtsController=require("../controllers/shirtsController")

/* GET users listing. */
router.get('/', shirtsController.getAll);

router.get('/detail/:id', shirtsController.getById);

router.get('/category/:category', shirtsController.getByCategory);

router.get('/related/:related', shirtsController.getByRelatedTo);//aca es para traer todos los shirts, que pertenecen a una categoria de init (esta unido por el id de init, id init 1 es running, deberia traer todos los running, en los campos q pido en model, de shirt porque en campo related_to tiene 1 tb)



module.exports = router;
