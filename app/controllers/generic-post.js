const child_process = require('child_process');
const HttpStatusCode  = require('../resources/http-status-code');

module.exports = (script, body) =>
{
    return new Promise((resolve, reject) =>
    {
        try
        {
            if (body.ref === 'refs/heads/master')
            {
                child_process.execSync(`${script}`);
                return resolve(HttpStatusCode.ok('success'));
            }
            
            return resolve(HttpStatusCode.ok('branch was not master'));
        }
        catch(err)
        {
            return reject(HttpStatusCode.internalServerError(err.message));
        }
    });
};
