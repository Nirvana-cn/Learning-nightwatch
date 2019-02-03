const gecko = require('geckodriver');

module.exports = (function(settings) {
    settings.test_workers = false;
    settings.webdriver.server_path = gecko.path;
    return settings;
})(require('./nightwatch.json'));
