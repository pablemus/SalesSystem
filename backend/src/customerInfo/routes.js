const express = require('express');
const router = express.Router();
const { getcxinfo, updatecxInfo } = require('./controller');

router.get('/cx-info', getcxinfo);
router.put('/cx-info/:id', updatecxInfo);

module.exports = router;