const express = require('express');
const cors = require('cors');

const fileDb = require('./fileDb');
const config = require('./config');
const posts = require('./app/posts');

const app = express();
app.use(cors());
app.use(express.static('public'));

app.use('/posts', posts);

const run = async () => {
    await fileDb.init();
    app.listen(config.port, () => {
        `Server has started working on ${config.port} port`;
    });
};

run().catch(e => {
    console.error(e);
});