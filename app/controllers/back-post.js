const genericPost = require('./generic-post');

module.exports = (body) =>
{
    console.log(process.pid);
    return genericPost(`./scripts/deploy-back ${process.pid}`, body);
};
