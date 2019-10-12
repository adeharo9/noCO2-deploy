/* Initialize express router */
const router = require('express').Router();

/* Load endpoints */
const root  = require('./endpoints/root' );
const front = require('./endpoints/front');
const back  = require('./endpoints/back' );
const core  = require('./endpoints/core' );

root (router);
front(router);
back (router);
core (router);

/* Export API routes */
module.exports = router;
