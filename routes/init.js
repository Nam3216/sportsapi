var express = require('express');
var router = express.Router();
const initController=require("../controllers/initController")


/* GET users listing. */
router.get('/', initController.getAll);

router.get('/detail/:id', initController.getById);

router.get('/category/:category', initController.getByCategory);



module.exports = router;
