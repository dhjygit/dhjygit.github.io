---
title: html学习笔记
date: 2020-07-26 21:21:12
update:
tags:
  - note
  - front-end
categories:
  - program
  - note
cover: https://cdn.jsdelivr.net/gh/dhjygit/cdn.image@master/post/html学习笔记.jpg
highlight_shrink: false
description: 在学习html过程中写下的笔记
---

# html常用标签实例

## html基本格式

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>dhjy's blog - Luis Liu</title>
    </head>
    <body>
        ...
    </body>
</html>
```

## html注释

```html
<!-- 注释内容 -->
```

## html标题

```html
<h1>一级标题</h1>
<h2>二级标题</h2>
<h3>三级标题</h3>
<h4>四级标题</h4>
<h5>五级标题</h5>
<h6>六级标题</h6>
```

## html水平线

```html
<hr>
```

## html段落

```html
<p></p>    <!-- 段落 -->
<br>       <!-- 换行 -->
```

## html链接

```html
<a href="#">空链接</a>
<a href="https://www.baidu.com/">正常链接</a>
<a href="https://www.baidu.com/" style="text-decoration:none;">无下划线链接</a>
<a href="https://www.baidu.com/" target="_blank">新标签页打开链接</a>
<a href="https://www.baidu.com/" target="_blank"><img src="/image/demo.jpg" /></a>图片链接

<a href="#C1">页面内链接</a>
<p id="C1"></p>

<a href="mailto:liu2211402141@qq.com?subject=demo%20and%20test&body=Happy%20birthday!">发送电子邮件</a>
```

## html图片

* \<img\>

```html
<img src="/image/background.jpg" width="1920" height="1080" />
```

* \<img\> \<map\> \<area\>

1、矩形：(左上角顶点坐标为(x1,y1)，右下角顶点坐标为(x2,y2))

```html
<area shape="rect" coords="x1,y1,x2,y2" href=url>
```

2、圆形：(圆心坐标为(X1,y1)，半径为r)

```html
<area shape="circle" coords="x1,y1,r" href=url>
```

3、多边形：(各顶点坐标依次为(x1,y1)、(x2,y2)、(x3,y3) ......)

```html
<area shape="poly" coords="x1,y1,x2,y2 ......" href=url>
```

## html表格

```html
cellpadding
cellspacing
colspan
rowspan
```

```html
<table border="1" cellpadding="10" cellspacing="0">
    <tr><th>姓名</th><th>学号</th></tr>
    <tr><td>xxx</td><td>01</td></tr>
    <tr><td>xxx</td><td>02</td></tr>
    <tr><td>xxx</td><td>03</td></tr>
</table>
```

## html列表

type: A, a, I, i

list-style-type: disc, circle, square

```html
<ul style="list-style-type:>
    <li></li>
    <li></li>
    <li></li>
</ul>
<ol>
    <li></li>
    <li></li>
    <li></li>
</ol>
<ol type="I">
    <li></li>
    <li></li>
    <li></li>
</ol>
```

## html格式化标签

``` html
<strong></strong>
<em></em>
<b></b>               <!-- bold 粗体-->
<i></i>               <!-- italic 斜体-->
<sub></sub>           <!-- subscripted 下标-->
<sup></sup>           <!-- superscripted 上标-->
<del></del>           <!-- delete 删除线 -->
<u></u>               <!-- underline 下划线 -->
```

# html头文件

## \<title\>元素

> **网页标题**

```html
<!DOCTYPE html>
<html>
    <head>
        <title>dhjy's blog - Luis liu</title>
    </head>
    <body></body>
</html>
```

## \<base\>元素

> **所有的链接标签的默认链接**
>
> **当链接为空时，将会跳转到base元素指定的链接的页面**

```html
<!DOCTYPE html>
<html>
    <head>
        <title>dhjy's blog - Luis liu</title>
        <base href="https://www.baidu.com/">
    </head>
    <body>
        <a href="#">超链接</a>
    </body>
</html>
```

## \<link\>元素

> **引入css文件**
>
> **引入标题左边的logo**

```html
<!DOCTYPE html>
<html>
    <head>
        <title>dhjy's blog - Luis liu</title>
        <link rel="shortcut icon" href="/image/logo/logo.jpg">
        <link rel="stylesheet" type="text/css" href="/css/demo.css">
    </head>
    <body></body>
</html>
```

## \<style\>元素

> **引入css**

```html
<!DOCTYPE html>
<html>
    <head>
        <title>dhjy's blog - Luis liu</title>
        <style></style>
    </head>
    <body></body>
</html>
```
