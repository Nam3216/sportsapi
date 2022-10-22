var express = require('express');
var router = express.Router();
const initController=require("../controllers/initController")
var cors = require('cors')

app.use(cors()) // Use this after the variable declaration

/* GET users listing. */
router.get('/', initController.getAll);

router.get('/detail/:id', initController.getById);

router.get('/category/:category', initController.getByCategory);



module.exports = router;
