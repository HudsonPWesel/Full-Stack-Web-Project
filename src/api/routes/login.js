const express = require('express');
const app = express();
app.post('/login', (req, res) => {
    res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
});
