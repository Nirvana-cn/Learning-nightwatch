module.exports = {
    before : function(browser) {
        console.log('Setting up...');
    },

    after : function(browser) {
        console.log('Closing down...');
    },

    beforeEach : function(browser) {

    },

    afterEach : function(browser) {

    },

    'step one' : function (browser) {

    },

    'step two' : function (browser) {
        browser
            .url('http://www.baidu.com')
            .waitForElementVisible('body', 1000)
            .setValue('#kw', 'nightwatch')
            .click('#su')
            .pause(3000)
            .waitForElementVisible('#content_left', 3000)
            .end();
    }
};