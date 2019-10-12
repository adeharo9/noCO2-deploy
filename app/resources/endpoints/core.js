const genericEndpoint = require('./generic');
const postController = require('../../controllers/core-post');

module.exports = (router) =>
{
    genericEndpoint('core', postController, router);
};
