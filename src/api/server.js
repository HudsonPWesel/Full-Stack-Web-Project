const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

app.get('/', (req, res) => {
	console.log('Testing');
});

app.get('/classmates', (req, res) => {
	console.log('CLASSMATEs');
	res.send('Classmates');
});

app.listen(3001, () => {
	console.log(`Server started successfully! Running on port 3001`);
});
