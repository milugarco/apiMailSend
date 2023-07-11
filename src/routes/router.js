const router = require('express').Router();

// Send email routes
const sendMailRouter = require('./sendMailRouter');

router.use('/', sendMailRouter);

module.exports = router;