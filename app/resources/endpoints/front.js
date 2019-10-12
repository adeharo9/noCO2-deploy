const genericEndpoint = require('./generic');
const postController = require('../../controllers/front-post');

module.exports = (router) =>
{
    genericEndpoint('front', postController, router);
};
