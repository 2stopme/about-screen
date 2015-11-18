var exec = require('cordova/exec');

var screenExports = {};

screenExports.getInfo = function(success, error) {
    exec(success, error, "AboutScreen", "getInfo", []);
};

module.exports = screenExports;
