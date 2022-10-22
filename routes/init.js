var express = require('express');
var router = express.Router();
const initController=require("../controllers/initController")
res.header("Access-Control-Allow-Headers","*");
res.header('Access-Control-Allow-Credentials', true);
res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');

/* GET users listing. */
router.get('/', initController.getAll);

router.get('/detail/:id', initController.getById);

router.get('/category/:category', initController.getByCategory);



module.exports = router;
