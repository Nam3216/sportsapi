var express = require('express');
var router = express.Router();
const usersControllers=require("../controllers/usersController")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource a');
});

router.post('/', usersControllers.createUser);

router.get('/login', usersControllers.login);



module.exports = router;
