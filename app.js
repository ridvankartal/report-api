const express = require('express');
const app = express();
const api = require('./routes/api');
const db = require('./db')();
require('dotenv').config();

// Parse incoming request   
app.use(express.json());

// Mount app routes
app.use('/api', api);

// Catch 404 error
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

// Error handler middleware
app.use((err, req, res, next) => {
    res.status(err.status || 500).send({
        code: -1,
        msg: err.message || 'Internal Server Error',
    });
});

// Run server on specified port
app.listen(process.env.PORT, () => console.info(`Listening on port ${process.env.PORT}...`));
