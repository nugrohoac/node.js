var express         = require('express');
var UserController  = require('../controller/userController');
var LoginRouter      = express.Router();

LoginRouter.route('/login')
    .post(UserController.Login);

module.exports = LoginRouter;