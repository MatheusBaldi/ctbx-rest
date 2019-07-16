const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connection = require('./connection');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

const person = require('./routes/api/person');

app.use('/api/person', person);

var port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server started on port ${port}`));

