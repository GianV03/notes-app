const cors = require('cors');
const express = require('express');

const app = express();

module.exports = app;

// Settings
app.set('port', process.env.PORT || 4000);

// MiddleWares
app.use(cors());
app.use(express.json());


// Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/notes', require('./routes/notes'));
app.use('/api/categories', require('./routes/categories'));

module.exports = app;
