'use strict';


module.exports = function (server) {

    server.get('/', function (req, res) {
        var model = { name: 'skald' };
        
        res.render('index', model);
        
    });

};
