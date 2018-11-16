// server.js
var express = require('express');
var serveStatic = require('serve-static');
var secure = require('express-force-https');

var httpsRedirect = require('express-https-redirect');

app = express();
app.use(serveStatic(__dirname + "/dist"));
app.use(secure)
app.use('/', httpsRedirect());
var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started '+ port);
