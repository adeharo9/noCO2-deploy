const child_process = require('child_process');
const HttpStatusCode  = require('../resources/http-status-code');

module.exports = (script, body) =>
{
    return new Promise((resolve, reject) =>
    {
        try
        {
            console.log(child_process.execSync(`${script}`).toString());
            return resolve(HttpStatusCode.ok('success'));
        }
        catch(err)
        {
            return reject(HttpStatusCode.internalServerError(err.message));
        }
    });
};
