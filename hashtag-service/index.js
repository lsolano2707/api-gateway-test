const express = require('express');
const app = express();
app.use(express.json());

app.get('/hashtags', (req, res) => {
    const response = `Called GET ${req.path}`;
    console.log(response);
    res.send(response);
})

app.get('/hashtags/:name', (req, res) => {
    const response = `Called GET ${req.path}`;
    console.log(response);
    res.send(response);
})

const port = 3002;
console.log(`hashtag-service run on port ${port}`);
app.listen(port);