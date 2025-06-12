const express = require('express');
const { getTeams, addTeam } = require('../controllers/teamController');
const router = express.Router();

router.get('/get', getTeams);
router.post('/add', addTeam);

module.exports = router;
