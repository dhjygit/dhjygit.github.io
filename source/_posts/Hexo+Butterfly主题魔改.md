---
title: Hexo+Butterfly主题魔改
date: 2020-06-23
update:
tags:
  - hexo 
  - blog
categories:
  - config
cover: https://cdn.jsdelivr.net/gh/dhjygit/cdn.image@master/post/Hexo%2BButterfly%E4%B8%BB%E9%A2%98%E9%AD%94%E6%94%B9.jpg
highlight_shrink: true
description: 关于对Butterfly博客主题的一系列魔改（适用3.0版本）
---
# hexo搭建博客

> **未特别指明，以下命令均在博客根目录下执行**

## 安装hexo

安装hexo框架

```
npm install hexo-cli -g
```

创建博客仓库(仓库名为bolg，可自定义)

```
hexo init wb
cd wb
npm install
hexo server
```

## 更换主题

butterfly修改版

```
git clone -b dev https://github.com/jerryc127/hexo-theme-butterfly.git themes/butterfly
```

安装渲染器

```
npm install hexo-renderer-pug hexo-renderer-stylus --save
```

修改文件`_config.yml`

```
theme: butterfly
```

复制主题配置文件

```
mkdir /home/luis/wb/source/_data
cp /home/luis/wb/themes/butterfly/_config.yml /home/luis/wb/source/_data/butterfly.yml
```



## 本地预览

```
hexo clean
hexo generate
hexo server
或者
hexo clean
hexo g
hexo s
或者
hexo clean && hexo g && hexo s
```

## 部署到github和coding

生成ssh公钥

```

```

安装插件

```
npm install hexo-deployer-git --save
```



修改文件`_config.yml`

```
deploy:
  type: git
  repo:
    github: git@github.com:dhjygit/dhjygit.github.io.git,master
    coding: git@git.e.coding.net:dhjygit/dhjygit.git,master
```

## 修改配置文件

```
hexo new page tags
hexo new page categories
hexo new page link
hexo new page gallery
hexo new page music
hexo new page movies
```



修改`_config.yml`

```
title: dhjy's blog
subtitle: 'Luis Liu'
description: 'Welcome to my blog'
keywords:
author: Luis Liu
language: en
timezone: ''
```

修改`butterfly.yml`

```

```



## 主题美化

### 替换友链

下载`flink.pug`并替换原来的文件

插入有关的css文件

```
@keyframes link_custom{from{box-shadow:0 0 5px var(--primary-color,grey),inset 0 0 5px var(--primary-color,grey),0 1px 0 var(--primary-color,grey)}to{box-shadow:0 0 20px var(--primary-color,grey),inset 0 0 10px var(--primary-color,grey),0 1px 0 var(--primary-color,grey)}}@keyframes link_custom1{0%{box-shadow:0 0 4px #ca00ff}25%{box-shadow:0 0 16px #00b5e5}50%{box-shadow:0 0 4px #00f}75%{box-shadow:0 0 16px #b1da21}100%{box-shadow:0 0 4px red}}@keyframes borderFlash{from{border-color:transparent}to{border-color:var(--primary-color,grey)}}@keyframes auto_rotate_left{from{transform:rotate(0)}to{transform:rotate(-360deg)}}@keyframes auto_rotate_right{from{transform:rotate(0)}to{transform:rotate(360deg)}}.flink#article-container .flink-list>.flink-list-item a:hover{color:#fff}.flink .flink-list>.flink-list-item a{color:var(--primary-color,#49b1f5);text-decoration:none}.flink .flink-list>.flink-list-item:hover{box-shadow:0 2px 20px var(--primary-color,#49b1f5);animation-play-state:paused}.flink#article-container .flink-list>.flink-list-item:before{background:var(--primary-color,#49b1f5)}.flink .flink-list>.flink-list-item{border:0 solid var(--primary-color,#49b1f5)}.flink#article-container .flink-list>.flink-list-item:hover img{-webkit-transform:rotate(var(--primary-rotate));-moz-transform:rotate(var(--primary-rotate));-o-transform:rotate(var(--primary-rotate));-ms-transform:rotate(var(--primary-rotate));transform:rotate(var(--primary-rotate))}.flink#article-container .flink-list>.flink-list-item a .lauto{animation:auto_rotate_left var(--autotime) linear infinite}.flink#article-container .flink-list>.flink-list-item a .rauto{animation:auto_rotate_right var(--autotime) linear infinite}.flink#article-container .flink-list>.flink-list-item .customcolor{color:var(--namecolor,#1f2d3d)}.flink#article-container .flink-list>.flink-list-item .customcolor:hover{color:#fff}
```



### 页面美化

#### 代码块样式

```

```



### 本地搜索

```
npm install hexo-generator-search --save
```



### 文章置顶

```
npm install hexo-generator-index --save
```

编辑配置文件

```
index_generator:
  path: '/_post/'
  per_page: 10
  order_by: -date
  pagination_dir: page
```

在文章开头加上一行

```
sticky: 100
```

### 豆瓣插件

```
npm install hexo-douban --save
```

将下面的配置写入站点的配置文件`_config.yml`里(不是主题的配置文件)

```
douban:
  user: mythsman
  builtin: false
  book:
    title: 'This is my book title'
    quote: 'This is my book quote'
  movie:
    title: 'This is my movie title'
    quote: 'This is my movie quote'
  game:
    title: 'This is my game title'
    quote: 'This is my game quote'
  timeout: 10000 
```





### 添加live2d

安装npm包

```
npm install --save hexo-helper-live2d
```

下载模型

```
npm install live2d-widget-model-tororo
```

安装模型

```
mkdir live2d_models
cp -r node_modules/live2d-widget-model-tororo live2d_models/
```

修改配置文件`_config.yml`

```
live2d:
  enable: true  
  scriptFrom: local
  pluginRootPath: live2dw/
  pluginJsPath: lib/
  pluginModelPath: assets/
  tagMode: false
  debug: false
  model:
    use: live2d-widget-model-tororo
    scale: 1
    hHeadPos: 0.5
    vHeadPos: 0.618
  display:
    superSample: 2
    position: right
    width: 150
    height: 300
    hOffset: 20
    vOffset: -50
  mobile:
    show: true
    scale: 1
  react:
    opacityDefault: 0.3
    opacityOnHover: 0.3
    opacity: 0.95
```

### 添加音乐播放

```
npm install --save hexo-tag-aplayer
```

#### 全局吸底aplayer

打开 `themes\Butterfly\layout\includes\head.pug`

找到代码

```
nclude ./head/config_site.pug
include ./head/noscript.pug
```

在下方加上

```
include ./third-party/aplayer.pug
```

在`themes\Butterfly\layout\includes\third-party\`里面新建一个文件叫 `aplayer.pug` ,内容如下

```
if theme.aplayer && theme.aplayer.enable
	.aplayer(data-id=theme.aplayer.id data-server=theme.aplayer.server data-type=theme.aplayer.type data-fixed=theme.aplayer.fixed data-mini=theme.aplayer.mini data-listFolded=theme.aplayer.listFolded data-order=theme.aplayer.order data-preload=theme.aplayer.preload)
	each item in theme.aplayer.css
		link(rel='stylesheet', href=item)
	each item in theme.aplayer.js
		script(src=item)
```

然后打开`butterfly.yml`(如果你没有启用的话,就打开`source/_data/butterfly.yml`) 加入以下内容

```
##侧边栏歌单
aplayer:
  enable: true
  meting: true
  js:
    - https://cdn.bootcss.com/aplayer/1.10.1/APlayer.min.js
    - https://cdn.jsdelivr.net/npm/meting@1.2.0/dist/Meting.min.js
  css:
    - https://cdn.bootcss.com/aplayer/1.10.1/APlayer.min.css
  id: 2693598459
  server: netease 
  type: playlist
  fixed: 'true'
  order: random
  preload: none
  listFolded: 'false'
```

解决与TOC冲突问题
打开 `themes\Butterfly\source\css\_global\index.styl`

[![img](https://img-blog.csdnimg.cn/20200519114915192.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)](https://img-blog.csdnimg.cn/20200519114915192.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)

### 修改页脚

#### 页底红心

编辑博客根目录 `/themes/Butterfly/layout/includes/footer.pug`文件，

将以下内容

```
&copy;${theme.since} - ${nowYear} By ${config.author}
```

改为

```
&copy;${theme.since} - ${nowYear + ' '} <i id="heartbeat" class="fa fas fa-heartbeat"></i> ${config.author}
```

将以下内容

```
&copy;${nowYear} By ${config.author}
```

改为

```
&copy;${nowYear + ' '} <i id="heartbeat" class="fa fas fa-heartbeat"></i> ${config.author}
```

在结尾加上以下内容

```
<head><link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/HCLonely/images@master/others/heartbeat.min.css"></head>
```



### 日历插件

安装 `hexo-generator-calendar` 插件

```
npm install --save git://github.com/howiefh/hexo-generator-calendar.git
```

下载 `calendar.js`和 `languages.js` 文件，保存到 `themes\Butterfly\source\js` 目录

- [calendar.js](https://github.com/pengloo53/Hexo-theme-light_cn/blob/master/source/js/calendar.js) 下载地址
- [languages.js](https://github.com/pengloo53/Hexo-theme-light_cn/blob/master/source/js/languages.js) 下载地址

编辑`calendar.js` 文件，在文件最后`}(jQuery));`之前添加:

```
$(document).ready(function () {
    $('#calendar').aCalendar('zh-CN');//'zh-CN'请根据自己博客的语言选择
});
```

具体位置参考下图：
[![img](https://img-blog.csdnimg.cn/20200419193746630.png)](https://img-blog.csdnimg.cn/20200419193746630.png)

编辑 `butterfly.yml` 文件

- 在 `inject->bottom`下面添加如下内容（如果用了上述方法就不要用了）：

```
- <script src="/js/calendar.js"></script>
- <script src="/js/languages.js"></script>
```

新建 `calendar.styl`文件，保存到 `themes\Butterfly\source\css\_layout` 目录下

修改成以下代码

```
#calendar
  a
    text-decoration none

.cal-head
  margin-bottom: 15px
  position relative
  height 20px
  padding 8px 6px 2px 6px

.cal-prev,.cal-next
  position absolute
  top 9px
  width 16px
  height 18px
  padding 3px 4px
  border 1px solid transparent
  color #333
  outline 0

.cal-prev
  left 8px
  &:before
    border-right 9px solid #333

.cal-next
  right 8px
  &:before
    border-left 9px solid #333

.cal-prev:before,.cal-next:before
  content ''
  display block
  width 0
  height 0
  border-top 5px solid transparent
  border-bottom 5px solid transparent

.cal-title
  width 120px
  margin 0 auto
  color #333
  font bold 14px/18px Arial
  text-align center
  a
    border 1px solid transparent
    color #9f9f9f

.cal,
.cal th,
.cal td
  border 1px solid #d1d1d1

.cal
  display: table
  border-collapse separate
  border-spacing 0
  border-width 1px 0 0 1px
  table-layout fixed
  width 100%
  margin 0
  th
    background #9f9f9f
    color #fff
    border-width 0 1px 1px 0
    font-weight 700
  td
    border-width 0 1px 1px 0
  tbody
    a
      background-color #007acc
      color #fff
      display block
      font-weight 700
    .cal-today
      background-color #66ecfd
      color #fff
  .cal-gray
    color #bbb8b8

[data-theme='dark'] .cal .cal-gray
  color #505050

.cal th,
.cal td
  font-weight normal
  line-height 2.5625
  padding 0
  text-align center

[data-theme='dark'] .cal .cal-foot
  color #9f9f9f

.cal .cal-foot
  color #2ca6cb

.cal-title a:hover,
.cal-prev:hover,
.cal-next:hover,
.cal .cal-foot:hover,
.cal .cal-foot:focus,
.cal tbody a:hover,
.cal tbody a:focus
  background-color #686868
  color #fff
  cursor pointer
```

在`themes\Butterfly\layout\includes\widget` 文件夹新建`card_calendar.pug` 文件，文件内容如下：

```
.card-widget.card-calendar
  .card-content
    .item-headline
      i.far.fa-calendar-alt(aria-hidden="true")
      span= _p('aside.card_calendar')
    div.widget-wrap
    div#calendar.widget
```

编辑`themes\Butterfly\layout\includes\widget\index.pug` 文件，在你想要显示的位置插入以下代码：

```
if theme.aside.card_calendar
  !=partial('includes/widget/card_calendar', {}, {cache:theme.fragment_cache})
```

编辑 `butterfly.yml`文件，在 `card_webinfo`下面添加一行`card_calendar: true`

编辑`themes\Butterfly\languages\zh-CN.yml`文件 (请根据你的网站语言选择)，找到 **card_announcement: 公告** , 在下面添加一行 **card_calendar: 日历** (后面的文本可自定义)

如果不想显示，直接把 `butterfly.yml`文件的`card_calendar: true`改为`card_calendar: false` 即可

### 哔哩哔哩插件

安装

```
npm install hexo-bilibili-bangumi --save
```

更新

```
npm install hexo-bilibili-bangumi --update --save
```

将下面的配置写入站点的配置文件 `_config.yml` 里(不是主题的配置文件).

```
bangumi:
  enable: true
  path: anime/index.html
  vmid: 452736529
  title: 'anime'
  quote: '生命不息，追番不止！'
  show: 2
  loading:
```

enable: 是否启用
path: 番剧页面路径，默认bangumis/index.html
vmid: 哔哩哔哩番剧页面的 vmid(uid)
title: 该页面的标题
quote: 写在页面开头的一段话,支持html语法
show: 初始显示页面：0: 想看, 1: 在看, 2: 看过，默认为1
loading: 图片加载完成前的loading图片

使用

* 在hexo generate或hexo deploy之前使用hexo bangumi -u命令更新番剧数据！
* 删除数据命令:hexo bangumi -d
