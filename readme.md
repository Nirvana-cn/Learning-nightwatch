大多数情况下，为了执行命令或断言，nightwatch需要向WebDriver服务发起至少两次请求，第一次请求通过css选择器或Xpath表达式确定一个元素的位置，第二次请求才会在元素上执行实际的命令或断言。

安装WebDriver服务可以通过直接下载二进制文件或使用NPM软件包来完成。

使用Selenium Standalone Server作为管理各种浏览器驱动程序和服务的de-factor标准，但不再需要从Nightwatch 1.0开始，也不推荐使用，除非您针对旧浏览器（如Internet Explorer）进行测试。

```json
"webdriver" : {
    "start_process": true,
    "server_path": "node_modules/.bin/chromedriver",
    "port": 9515
  },
```

官方教程实在是造成了严重的误导，关键是你安装完chromedriver这个包后，`node_modules/.bin/chromedriver`目录下面确实有一个`chromedriver`文件，但是我们需要的是`chromedriver.exe`文件。

chrome端口号9515

firefox端口号4444

** window下，firefox 默认寻找路径为C:\Program Files\Mozilla Firefox，如果安装在其它路径，需要指定moz:firefoxOptions属性或者使用--binary PATH命令，告诉geckodriver启动路径。
