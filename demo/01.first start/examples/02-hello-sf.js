module.exports = {
  'Demo test blog' : function (client) {
    client
      .url('http://iceiceice.top')
      .waitForElementVisible('body', 1000)
      .assert.title('冰，水为之而寒于水')
      .end();
  }
};
