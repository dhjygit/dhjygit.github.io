---
title: nvim配置
date: 2020-07-28 11:42:04
update:
tags:
  - note
categories:
  - config
cover: https://cdn.jsdelivr.net/gh/dhjygit/cdn.image@master/post/nvim配置.jpg
highlight_shrink: false
description: 关于nvim的基本配置和插件推荐基本
---

# 基本配置

## 配置文件

```

```

## 安装python

1. 安装pip（archlinux）

   ```sh
   sudo pacman -S python-pip
   ```

2. 安装pynvim

   ```shell
   python3 -m pip install pynvim
   ```

3. 检查是否安装，在nim的命令行模式下

   ```shell
   :checkhealth
   ```

# 安装插件

## youcompleteme插件

> **`Plug 'ycm-core/YouCompleteMe'`**
>
> **使用代理安装**

1. 安装cmake

   ```shell
   sudo pacman -S cmake
   ```

2. 在保存插件的文件夹目录下执行以下命令`~/.config/nvim/myplugin`

   ```shell
   cd ~/.config/nvim/myplugin
   git clone https://github.com/ycm-core/YouCompleteMe.git
   git submodule update --init --recursive
   ```

3. 安装相应的补全插件（该步若安装失败，关闭代理后再次尝试）

   可以使用`./install.py --help`查看可以安装的补全语言，下面的命令为安装所有语言的补全

   ```shell
   ./install.py --all
   ```

4. 遇到无法下载的文件时可以直接点击链接下载，再移动到相应目录下面覆盖原来没有下载完全的文件


## vim-surround

> **`Plug 'tpope/vim-surround'`**

* 增添（y）
  * ysiw"    ysiw<html\>
  * yss"    yss<html\>
* 替换（c）
  * cs"\'    cs"<html\>
  * cst\'    cst<html\>
* 删除（d）
  * ds"    ds<