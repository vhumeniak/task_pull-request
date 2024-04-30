const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 1337;

app.use(bodyParser.json());

app.post('/pull-request', (req, res) => {
    const { title, description, author, repository } = req.body;
    res.status(201).json({ message: 'success!' });

});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});