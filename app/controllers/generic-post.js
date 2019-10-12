const child_process = require('child_process');
const HttpStatusCode  = require('../resources/http-status-code');

module.exports = (script, body) =>
{
    return new Promise((resolve, reject) =>
    {
        try
        {
            child_process.execSync(`${script}`);
            return resolve(HttpStatusCode.ok('success'));
        }
        catch(err)
        {
            return reject(err);
        }
    });
};