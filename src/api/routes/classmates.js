const express = require('express');

const app = express();

app.get('/classmates', (req, res) => {
	console.log('CLASSMATEs');
	res.send('Classmates');
});
