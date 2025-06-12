const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
  name: String,
  teams: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Team' }]
});

module.exports = mongoose.model('Group', groupSchema);
