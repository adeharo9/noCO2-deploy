const genericPost = require('./generic-post');

module.exports = (body) =>
{
    return genericPost('./scripts/deploy-all', body);
};
