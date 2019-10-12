const genericEndpoint = require('./generic');
const postController = require('../../controllers/root-post');

module.exports = (router) =>
{
    genericEndpoint('', postController, router);
};
