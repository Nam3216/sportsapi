var express = require('express');
var router = express.Router();
const usersControllers=require("../controllers/usersController")

/* GET users listing. */
router.get('/',usersControllers.getAll);

router.post('/', usersControllers.createUser);

router.get('/login', usersControllers.login);



module.exports = router;
