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
app.get('/users', (req, res)=> res.send('Users Route'));

module.exports = app;