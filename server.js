const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

require('dotenv/config');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    auth: { authSource: process.env.MONGO_AUTHSOURCE },
    user: process.env.MONGO_USER,
    pass: process.env.MONGO_PASS,
});

requireDir('./src/models');

app.use('/api', require('./src/routes'));

app.listen(process.env.APP_PORT);