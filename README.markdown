#Theses论文管理系统（前端, 毕业设计）
Theses论文管理系统的前端，基于Ember.js实现。
中山大学南方学院09级电软系毕业设计。

##Build

项目的js文件使用AMD进行依赖管理，由于js文件众多，在正式部署时需要进行编译，编译的步骤为：

1. 安装Nodejs
2. 使用r.js编译工具[进行编译](http://requirejs.org/docs/optimization.html#wholeproject)

在开发调试时，可以免去编译步骤以提高开发效率


##Deploy
项目中全部为静态文件，可以直接部署到Nginx、Apache等HTTP服务器运行

##Todo
* <del>里程碑时间管理</del>
* <del>系和专业信息管理</del>
* <del>用户管理</del>
* <del>教师资格管理</del>
* <del>出题</del>
* 申请论题
* 选题
* <del>审题</del>
* <del>上传文档</del>
* 打分
* 私信交流
* 邮件通知


##License
```
(The MIT License)

Copyright (c) 2013 wutian <naituw@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```