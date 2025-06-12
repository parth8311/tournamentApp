const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/teams', require('./routes/teamRoutes'));
app.use('/api/groups', require('./routes/groupRoutes'));
app.use('/api/fixtures', require('./routes/fixtureRoutes'));

module.exports = app;
