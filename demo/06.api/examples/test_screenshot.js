module.exports={
    "use screenshot api": function (browser) {
        browser
            .url(browser.launch_url)
            .waitForElementVisible('body',1000)
            .setValue('.gLFyf', 'dota2')
            .click('[name=btnK]')
            .waitForElementVisible('#rhscol',2000)
            .windowMaximize('current')
            .saveScreenshot('./output/result.png')
            .end()
    }
}