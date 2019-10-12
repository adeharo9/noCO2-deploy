const genericPost = require('./generic-post');

module.exports = (body) =>
{
    return genericPost('./scripts/deploy-core', body);
};
