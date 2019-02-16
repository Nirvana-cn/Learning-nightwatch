## Base Settings

| 属性名称 | 类型  |  默认值 | 描述 |
| ------ | ------ | ------ | ------ |
|src_folders|	string或array|	none|	测试文件所在的目录（不包含子目录）|
|output_folder （可选）|	string	|'tests_output'|测试报告文件生成的目录|
|custom_commands_path （可选）|	string或array|	none|	自定义command所在的文件目录|
|custom_assertions_path （可选）|	string或array|	none|	自定义assertion 所在的文件目录|
|page_objects_path （可选）|	string或array|	none|	page objects所在的文件目录|
|globals_path （可选）|	string|	none|	外部全局变量的位置，全局变量也可以在test_settings中被定义或者复写|
|live_output （可选）|	boolean	|false|	并行运行测试的时候，是否缓存输出|
|disable_colors （可选）|	boolean|	false|	运行命令行的时候时候的输出是否带颜色|
|parallel_process_delay （可选）|	integer	|10	|并行运行的时候，指定开启子进程的延时时间(单位：毫秒)|
|test_workers``（可选）|	boolean或object|	false|	是否并行运行测试文件|
|test_runner （可选）|	string或object|	"default"|指定你想用的测试运行器，可以设置为 default（nightwatch内置的runner） 或者 mocha|
|unit_tests_mode（可选）|	boolean	|false	|控制是否在单元测试模式下运行测试|
|selenium （可选）|	object	|	|Selenium Server相关配置,详见注释1和2|
|webdriver |	object	|	|Selenium Server相关配置,下面有详细介绍|
|test_settings|	object|	|包含所有测试相关的选项配置，下面会有详细介绍|

注释：

1. 使用`Selenium Server`作为管理各种浏览器驱动程序和服务的标准，但从`Nightwatch v1.0`开始不再需要，也不推荐使用，除非您针对旧浏览器（如`Internet Explorer`）进行测试；

2. 虽然在`Nightwatch v1.0`中 `Selenium`服务依然可以得到支持，但是当`Webdriver`和`Selenium`配置同时存在时，`Selenium`配置项会被合并到`Webdriver`中。


## WebDriver Settings

`Nightwatch`可以自动启动和停止`WebDriver`进程，这非常方便，因为您不必自己管理它，只关注测试。

| 属性名称 | 类型  |  默认值 | 描述 |
| ------ | ------ | ------ | ------ |
|start_process|	boolean|	false|	是否自动管理WebDriver进程|
|server_path|	string|	none|	WebDriver程序所在的路径|
|port|	integer	|	|Nightwatch尝试连接的端口号|
|host|	string	|	|只有当WebDriver服务运行在不同机器上时才需要指定|
|log_path （可选）|	string或boolean|none|	日志输出路径，默认为当前目录|
|cli_args （可选）|	object	|none|	要传递给WebDriver进程的cli参数列表。每个WebDriver实现都有所不同|
|request_timeout_options （可选）|	object|	timeout:60000, retry_attempts:0|指定超时和重连次数|
|username （可选）|	string	|none|	用户名，常用于云端测试|
|access_key （可选）|	string	|none	|与username一同使用|
|proxy （可选）	|string|	none|	代理，使用node-proxy-agent|
|default_path_prefix （可选）|	string	|	| 使用Selenium Server时有时需要。 要添加到所有请求的前缀|
|use_legacy_jsonwire （可选）| boolean|	false	|一些WebDriver的实现（Safari，Edge）既支持W3C WebDriver API，也支持传统的JSON Wire（Selenium）API 设置|


## Test Settings

| 属性名称 | 类型  |  默认值 | 描述 |
| ------ | ------ | ------ | ------ |
|launch_url|	string|	none	| 启动测试的url，详见注释1
|selenium_host|	string|	localhost|	selenium服务器接受连接的主机名/ IP
|selenium_port|	integer	|4444	|selenium服务器接受连接的端口号
|silent	|boolean	|true|	是否显示扩展的selenium的日志
|output	|boolean	|true|	是否完全禁用终端的输出
|disable_colors	|boolean|	false	|终端的输出是否可以带颜色
|desiredCapabilities	|object|	|每当WebDriver创建一个会话时，可以指定浏览器名称等其它特性
|start_session	|boolean	|true |是否自动创建WebDriver会话
|unit_tests_mode	|boolean	|false |在单元测试模型下运行Nightwatch
|screenshots|	object	|none	|当命令发生错误Selenium会生成截图。这些都保存在磁盘上
|globals|	object|		|全局变量对象，可以在测试中获取，也可以被每一个测试改写
|persist_globals |	boolean	|false	|全局变量选项，详见注释2
|cli_args|	object	|none|	与 Selenium 中的 cli_args一样。你可以基于每个环境覆盖全局cli_args。
|end_session_on_fail|	boolean	|true	|当测试终止时是否自动结束会话, 通常在一个断言失败后
|skip_testcases_on_fail	|boolean	|true	|当一个测试用例或步骤失败后，是否跳过同文件中剩余的测试用例
|exclude|	array|		|要跳过的文件夹或者匹配指定模式的文件
|filter|	string	|	|加载指定模式的文件，不匹配该模式的将会被忽略
|log_screenshot_data|	boolean|	false|	在截屏时，是否在日志中显示Base64图像数据
|use_xpath	|boolean|	false|	使用xpath作为选择器
|output_folder |string或boolean| | 输出文件路径，将会重写基础配置中的设置
|skipgroup |string	|	|跳过一组测试
|skiptags |string	|	|跳过指定标签的测试
|sync_test_names| boolean|	true| 添加测试name属性
|detailed_output| 	boolean|true|是否显示测试的详细信息，详见注释3

注释：

1. 可以在以后的测试中被加载的主`URL`。如果你在不同的环境中运行测试，每个环境都会有对应的不同的`URL`，这会很有帮助。

该属性值在测试中可以通过`Nightwatch`的`api`来获取。它的值取决于你使用的具体环境。

```javascript
module.exports = {
  'Demo test' : function (browser) {
    browser
      .url(browser.launchUrl)
      // ...
      .end();
  }
};
```

2. 默认情况下，每个测试套件运行时都会使用全局对象的深拷贝副本。如果你想在整个测试运行期间保持相同的对象，可以将`persist_globals`选项设置为`true`。

3. 默认情况下，在测试运行时会显示详细的断言输出。如果你只想查看显示的测试用例名称和通过/失败状态，请将此项设置为`false`。这在并行运行测试时特别有用。

## Environment specific settings

我们可以在`test_settings`中定义多个部分（环境），以便可以覆盖每个环境的特定值。

```json
{
  "test_settings" : {
    "default" : {
      "launch_url" : "http://localhost",
      "globals" : {
        "myGlobalVar" : "some value",
        "otherGlobal" : "some other value"
      }
    },

    "integration" : {
      "launch_url" : "http://staging.host",
      "globals" : {
        "myGlobalVar" : "other value"
      }
    }
  }
}
```

然后可以将设置组的键作为`--env`参数传递给运行器以使用指定的设置，如下所示：

```bash
nightwatch --env integration
```

** `default`环境是必须的。其它所有的环境都将从这个`default`环境中继承，并且根据需要来重写配置。

## Test Globals

`Nightwatch`提供的一个非常有用的概念是全局变量。最简单的定义方式，是在你的`nightwatch.json`配置文件中定义一些键值对。和 `launch_url` 一样，你在测试文件中也可以直接使用`nightwatch`的`api`来获取这些值。它的值也取决于你的运行环境，你可以根据不同的环境来设置不同的值。

如果仍然将 `--env integration` 选项传给测试运行器，那么我们的全局对象就长这样：

```javascript
module.exports = {
  'Demo test' : function (browser) {
    console.log(browser.globals);
    /*
      {
        "myGlobalVar" : "other value",
        "otherGlobal" : "some other value"
      }
    */
  }
};
```

可以发现，除了`myGlobalVar`这个变量，我们还从`default`环境继承了`otherGlobal`变量。具体例子可参见`demo3`。