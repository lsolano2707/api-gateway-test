const express = require('express');
const app = express();
app.use(express.json());

app.get('/feeds', (req, res) => {
    const response = `Called GET ${req.path}`;
    console.log(response);
    res.send(response);
})

app.get('/feeds/:hashtag', (req, res) => {
	const response = `Called GET ${req.path}`;
    console.log(response);
    res.send(response);
})

app.post('/feeds', (req, res) => {
	const response = `Called POST ${req.path} ${JSON.stringify(req.body)}`;
    console.log(response);
    res.send(response);
})

const port = 3001;
console.log(`feed-service run on port ${port}`);
app.listen(port);