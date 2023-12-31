// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

router.get('/login', userController.getLogin);
router.get('/register', userController.getRegister);
//router.post('/register',userController.postRegister);

module.exports = router;