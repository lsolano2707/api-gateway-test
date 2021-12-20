
const express = require('express');
const app = express();
const router = require('./router');

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Simple API Gateway")
});

app.use(router);

console.log("Simple API Gateway run on localhost:3000")

app.listen(3000);