const mongoose = require('mongoose');

const fixtureSchema = new mongoose.Schema({
  groupId: { type: mongoose.Schema.Types.ObjectId, ref: 'Group' },
  matches: [
    {
      teamA: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' },
      teamB: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' }
    }
  ]
});

module.exports = mongoose.model('Fixture', fixtureSchema);
