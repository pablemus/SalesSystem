const express = require('express');
const router = express.Router();
const {register, login} = require('./controller');
const { verifyToken, requireAdmin, requireEmployee } = require('../middlewares/auth');
router.post('/register', verifyToken, requireAdmin, register);

router.post('/login', login);

module.exports = router;