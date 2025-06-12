const Group = require('../models/Group');
const Fixture = require('../models/Fixture');

exports.generateFixtures = async (req, res) => {
  await Fixture.deleteMany();
  const groups = await Group.find().populate('teams');
  console.log(groups);
  let allFixtures = [];

  for (const group of groups) {
    let matches = [];
    const teams = group.teams;

    for (let i = 0; i < teams.length; i++) {
      for (let j = i + 1; j < teams.length; j++) {
        matches.push({ teamA: teams[i]._id, teamB: teams[j]._id });
      }
    }

    const fixture = new Fixture({ groupId: group._id, matches });
    console.log(fixture);
    await fixture.save();
    allFixtures.push(fixture);
  }

  res.json(allFixtures);
};

exports.getFixtures = async (req, res) => {
  const fixtures = await Fixture.find().populate('groupId').populate('matches.teamA').populate('matches.teamB');
  console.log(fixtures);
  res.json(fixtures);
};
