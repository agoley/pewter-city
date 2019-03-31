
    
/* This file maps your route matches
 * to functions defined in various
 * controller classes
 */
server = module.parent.exports.server;

/* require controllers here */
var financeController = require('./controllers/finance.controller');

/* Put routes here */

// finance routes
server.get('/finance', financeController.index);