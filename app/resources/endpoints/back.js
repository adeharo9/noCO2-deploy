const genericEndpoint = require('./generic');
const postController = require('../../controllers/back-post');

module.exports = (router) =>
{
    genericEndpoint('back', postController, router);
};
