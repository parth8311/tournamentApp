const express = require('express');
const { generateFixtures, getFixtures } = require('../controllers/fixtureController');
const router = express.Router();

router.post('/generate', generateFixtures);
router.get('/get', getFixtures);

module.exports = router;
