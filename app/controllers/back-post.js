const genericPost = require('./generic-post');

module.exports = (body) =>
{
    return genericPost(`./scripts/deploy-back`, body);
};
