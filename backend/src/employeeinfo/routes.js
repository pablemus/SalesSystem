const express = require('express');
const router = express.Router();
const { getEmployeeInfo, updateEmployeeInfo } = require('./controller');
const { verifyToken, requireAdmin } = require('../middlewares/auth');

router.get('/employee-info', verifyToken, requireAdmin, getEmployeeInfo);
router.put('/employee-info/:id', verifyToken, requireAdmin, updateEmployeeInfo);

module.exports = router;
