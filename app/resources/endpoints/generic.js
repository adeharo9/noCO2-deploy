const endpointHandler = require('../utils').endpointHandler;

module.exports = (endpoint, controller, router) =>
{
    /* Generic endpoint POST request handler */
    router.post(`/${endpoint}`, (req, res) =>
    {
        endpointHandler(controller(req.body), res);
    });
};
