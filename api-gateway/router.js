const express = require('express');
const router = express.Router()
const feedService = require('./services/feed-service')
const hashtagService = require('./services/hashtag-service')

router.use((req, res, next) => {
    console.log("Called: ", req.path)
    next()
})

router.use(feedService)
router.use(hashtagService)

module.exports = router