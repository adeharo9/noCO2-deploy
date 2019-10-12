/* noCO2 project */
/* Dependencies */
require('dotenv').config({ silent: true });

const http       = require('http');
const express    = require('express');
const bodyParser = require('body-parser');

/* Initialize and configure app */
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* Initialize endpoints */
const routes = require('./app/resources/routes');
app.use('/deploy', routes);

/* Start server */
let serverHttp;

if (process.env.ENV == 'prd')
{
    serverHttp = http.createServer(app).listen(process.env.PORT_HTTP_PRD || 34213, () =>
    {
        console.log('noCO2 deployment server running on port', serverHttp.address().port);
    });
}
else
{
    serverHttp = http.createServer(app).listen(process.env.PORT_HTTP_DEV || 34213, () =>
    {
        console.log('noCO2 deployment server running on port', serverHttp.address().port);
    });
}
