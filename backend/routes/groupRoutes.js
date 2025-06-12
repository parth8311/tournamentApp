const express = require('express');
const { createGroups, getGroups } = require('../controllers/groupController');
const router = express.Router();

router.post('/create', createGroups);
router.get('/get', getGroups);

module.exports = router;
