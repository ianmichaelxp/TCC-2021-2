const api = require('../model/wirelesstoolsModel')

let controller = {}

controller.getStatus = (req, res) => {
    api.getStatusWifi().status(function(err, status) {
        if (err) res.status(400).json(err);
        else res.status(200).json(status);
    });
};

module.exports = controller;