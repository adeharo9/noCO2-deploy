const genericPost = require('./generic-post');

module.exports = (body) =>
{
    genericPost('./scripts/deploy-all', body);
};
