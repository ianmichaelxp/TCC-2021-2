let controller = require('../controller/wirelesstoolsController');

module.exports = function(app) {

    app.route('/info')
        .get(controller.getStatus);
};