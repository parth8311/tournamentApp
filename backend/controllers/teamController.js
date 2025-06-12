const Team = require('../models/Team');

exports.getTeams = async (req, res) => {
  const teams = await Team.find();
  res.json(teams);
};

exports.addTeam = async (req, res) => {
  const team = new Team(req.body);
  await team.save();
  res.json(team);
};
