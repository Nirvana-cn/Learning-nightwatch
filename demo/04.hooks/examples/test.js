module.exports = {
    before : function(browser) {
        console.log('Setting up...');
    },

    after : function(browser) {
        console.log('Closing down...');
    },

    beforeEach : function(browser) {
        console.log('Begin test...');
    },

    afterEach : function(browser) {
        console.log('Finish test...');
    },

    'step one' : function (browser) {
        browser
            .url('http://iceiceice.top')
            .waitForElementVisible('body', 1000)
            .assert.title('冰，水为之而寒于水')
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