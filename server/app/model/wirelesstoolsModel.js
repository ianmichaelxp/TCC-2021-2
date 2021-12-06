var iwconfig = require("wireless-tools/iwconfig");
let api = {};

api.getStatusWifi = function() {
    return iwconfig;
};

// iwconfig.status(function(err, status) {
//     api.getStatusWifi = function() {
//         //console.log(status);
//         return status;
//     };
// });

module.exports = api;

// { 
//     interface: 'wlp2s0',
//     access_point: '14:cc:20:b8:04:ae',
//     frequency: 2.412,
//     ieee: '802.11',
//     mode: 'managed',
//     quality: 45,
//     signal: -65,
//     ssid: 'Ian_Brisanet' 
// }