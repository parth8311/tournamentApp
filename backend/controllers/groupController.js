const Group = require('../models/Group');
const Team = require('../models/Team');

exports.createGroups = async (req, res) => {
  await Group.deleteMany(); // reset groups
  const teams = await Team.find();
  const totalTeams = teams.length;
  let groups = [];

  if (totalTeams <= 8) {
    groups.push({ name: 'Group A', teams: teams.map(t => t._id) });
  } else {
    const possibleGroupCounts = [2, 4, 6, 8].filter(g => totalTeams % g === 0);
    const groupCount = possibleGroupCounts[0];
    const size = totalTeams / groupCount;

    for (let i = 0; i < groupCount; i++) {
      groups.push({
        name: `Group ${String.fromCharCode(65 + i)}`,
        teams: teams.slice(i * size, (i + 1) * size).map(t => t._id)
      });
    }
  }

  const created = await Group.insertMany(groups);
  res.json(created);
};

exports.getGroups = async (req, res) => {
  const groups = await Group.find().populate('teams');
  console.log(groups)
  res.json(groups);
};
