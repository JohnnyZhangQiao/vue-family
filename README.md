# vue+webpack+vue-router+vuex+axios简单实例
  
> github地址 https://github.com/JohnnyZhangQiao/vue-family

> 如果对您有帮助，您可以点右上角 "Star" 支持一下 谢谢！ ^_^  
  
  
  另外说明下：**这个demo目前只做首页，但是该用上的技术都用上了，简单易懂。**



#### Vuex  

> Vuex是专门为 Vue.js 设计的状态管理库   

> 首先是创建一个 store ，里面有:  

- state(状态)

- mutations（引发状态改变的方法）

- actions(触发mutations的方法)

>然后在每次对数据对象进行操作的时候，进行dispatch（action 的方法名）用来触发mutations的方法来改变state状态..   


##### 技术栈

> [vue]

> [vue-router]

> [vuex]  

> [vue-resource]

> [webpack]

> [es6-babel]

> [less]

> [font-awsome] （字体图形，用于icon）


### 目录结构
<pre>
.
├── README.md           
├── dist                     // 项目build目录（build之后自动生成）
├── package.json             // 项目配置文件
├── src                      // 生产目录
│   ├── assets               // less js 和图片资源
│   ├── components           // 各种组件
│   ├── router               // 路由存放地方
│       ├── router.js        // 路由配置
│   ├── views                // 各种页面
│   ├── vuex                 // vuex文件存放
│       ├── store.js         // vuex配置
│   └── App.vue              // 根组件
│   └── main.js              // Webpack 预编译入口         
├── index.html               // 项目入口文件
├── build                    // build时候需要的配置文件
│   ├── webpack.config.js    //webpack配置文件
├── .gitignore               //git忽略文件
</pre>


### 安装

#### 1.git clone安装
```shell
git clone https://github.com/JohnnyZhangQiao/vue-family.gi
```

#### 2.下载压缩包安装


#### 3.安装node.js(如果您已经安装nodejs和配置好npm环境，请直接到第5步)
```
下载对应你系统的Node.js版本:https://nodejs.org/en/download/
安装完成后在命令窗口输入：node -v 和 npm -v，有版本显示即为安装成功
```


#### 4.安装淘宝npm镜像cnpm
```
安装前先介绍下npm与cnpm：
npm：（node package manager）nodejs的包管理器，用于node插件管理（包括安装、卸载、管理依赖等）；
cnpm：因为npm安装插件是从国外服务器下载，受网络影响大，可能出现异常，如果npm的服务器在中国就好了，
所以我们乐于分享的淘宝团队干了这事。来自官网：“这是一个完整 npmjs.org 镜像，你可以用此代替官方版本(只读)，
同步频率目前为 10分钟一次以保证尽量与官方服务同步。”；
另外，cnpm跟npm用法完全一致，只是在执行命令时将npm改为cnpm。

shell
npm install -g cnpm –registry=https://registry.npm.taobao.org

安装完成后在命令窗口输入：cnpm -v，有版本显示即为安装成功
```


#### 5.安装项目依赖包
```
进入下载后的demo文件根目录，输入：cnpm install，静待安装完成。
```


#### 6.运行项目
```
进入下载后的demo文件根目录，输入：npm run dev后，在浏览器自动弹出访问页面：http://localhost:8080/
因为是移动端的spa项目，请把开启您的浏览器调试，换成手机调试模式
```
