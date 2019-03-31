var restify = require("restify");
var server = restify.createServer();

server.listen(8080, function() {
  console.log("%s listening at %s", server.name, server.url);
});

/*
 * Exports the restify server for other modules to use
 * all route matches go the routes.js file
 */
module.exports.server = server;
routes = require("./routes");
