const express = require('express');
const router = express.Router();
const apiAdapter = require('../api-adapter');

const BASE_URL = 'http://localhost:3001';
const api = apiAdapter(BASE_URL);

router.get('/feeds', (req, res) => {
	api.get(req.path).then(resp => {
		res.send(resp.data)
	});
});

router.get('/feeds/:hashtag', (req, res) => {
	api.get(req.path).then(resp => {
		res.send(resp.data)
	});
});

router.post('/feeds', (req, res) => {
	api.post(req.path, req.body).then(resp => {
		res.send(resp.data)
	});
});

module.exports = router;