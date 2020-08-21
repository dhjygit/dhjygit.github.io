---
title: Linux常用命令
date: 2020-07-25 14:27:58
update:
tags:
  - linux
  - note
categories:
  - linux
cover: https://cdn.jsdelivr.net/gh/dhjygit/cdn.image@master/post/Linux常用命令.jpg
highlight_shrink: false
description: Linux系统的一些常用命令总结命令
---

# 搜索命令

## ls命令(list)

>**列出当前目录或子目录文件**
>
>**ls命令默认是按照文件名首字母ascii码由小到大排序的（纯字母相当于按字母从小到大排列，字母小的在前面）**

* **ls -a**    列出目录所有文件（包括以 . 开头的隐藏文件，包括 ./ 和 ../）

  **ls -A**   列出目录所有文件（包括以 . 开头的隐藏文件，不包括 ./ 和 ../）

* **ls -l**    显示文件详细信息

  **ls -h**    以易读大小显示

* **ls -t**    以修改时间排序（时间近的排在前面）

  **ls -S**    按文件从大到小排序（文件大的排在前面）

* **ls -r**    反序排列

* **ls -R**    包括字目录

* **ls** filename    查找文件

  **ls -d** filename    查找文件夹

  ```shell
  ls *Desktop*
  ls -d *Desktop* 
  ```

## find命令

> **从文件树中查找文件**

* **find** pathname **-name** "filename"

  ```shell
  find /home/luis/Music/lx-music/ -name "Dream It Possible - Delacey.mp3"
  ```

* **find** pathname **-name** "filename" **-size** size

  size: 

  * +1M    文件大小超过1M
  * -1M    文件大小小于1M

  ```shell
  find /home/luis/Music/lx-music/ -name "Dream It Possible - Delacey.mp3" -size +1M
  ```

* **find** pathname **-name** "filename" **-exec** command {} **\;**

  {}表示搜索出来的结果，\;代表结束

  ```shell
  find /home/luis/Music/lx-music/ -name "Dream It Possible - Delacey.mp3" -exec rm {} \;
  ```

## grep命令

> **搜索文件内容**

 * **| grep** command    管道符加grep命令

   ```shell
   cat demo.txt | grep best
   ```

## sed命令

> **对文件进行增，删，改**

**sed**    显示结果，修改源文件

**sed -i**    直接修改源文件

sed -e    执行多条命令

* 新增a

  插入i

  | **sed "a hello" demo.txt**    | **每一行后新增一行内容为 hello**           |
  | ----------------------------- | ------------------------------------------ |
  | **sed “2a hello" demo.txt**   | **第2行后新增一行内容为 hello**            |
  | **sed "1,3a hello" demo.txt** | **第1到3行的每一行后新加一行内容为 hello** |

* 替换c

  | **sed "c hello" demo.txt**    | **每一行内容替换成 hello**       |
  | ----------------------------- | -------------------------------- |
  | **sed "2c hello" demo.txt**   | **第2行内容替换成 hello**        |
  | **sed "1,3c hello" demo.txt** | **第1到3行内容替换成一行 hello** |

* 删除d
  | **sed "d" demo.txt**    | **删除所有行**   |
  | ----------------------- | ---------------- |
  | **sed ”2d“ demo.txt**   | **删除第 2 行**  |
  | **sed ”1,3d' demo.txt** | **删除第1到3行** |

* 打印p

  | **sed "2p" demo.txt**    | **在打印原来全部内容的基础上，重复打印第2行** |
  | ------------------------ | --------------------------------------------- |
  | **sed -n "2p" demo.txt** | **只打印第2行**                               |

* 替换s

  无g时表示只替换相应行的第1个good，g表示一行多个，i表示不区分大小写

  | **sed "s/good/best/" demo.txt**      | **每一行第一个good替换成best**               |
  | ------------------------------------ | -------------------------------------------- |
  | **sed "s/good/best/gi" demo.txt**    | **每一行所有good替换成best，不区分大小写**   |
  | **sed "2s/good/best/gi" demo.txt**   | **第2行所有good替换成best，不区分大小写**    |
  | **sed "1,3s/good/best/gi" demo.txt** | **第1到3行所有good替换成best，不区分大小写** |

## fzf命令（需安装）

> **搜索文件**

## ag命令(the_silver_searcher)（需安装）

> **搜索文件内容，速度更快**

# 文件处理命令

## cd命令(ChangeDirectory)

> **切换目录**

* **cd /**    根目录

* **cd ~**    家目录

* **cd -**    上一次的目录

* **cd !$**    将上一个命令作为cd的参数使用

  ```shell
  /
  cd !$
  ```

## pwd命令

> **查看路径**

* **pwd**    查看当前路径
* **pwd -P**    查看软链接的实际路径

## mkdir命令

> **创建文件夹命令**

* **mkdir**    创建文件夹
* **mkdir -p**    创建文件夹，可同时创建多层子目录

## rm命令

> **删除命令**

* **rm**    删除文件
* **rm -r**    删除文件夹
* **rm -f**    直接删除，无需确认
* **rm -i**    删除前逐一询问确认

## cp命令

> **复制命令**

* **cp**    复制文件
* **cp -r**    复制文件夹
* **cp -i**    提示

## mv命令

> **移动，重命名**

* **mv**    移动文件，不提示是否覆盖，文件名相同时直接替换
* **mv -i**    若有相同的文件名，提示是否覆盖

# 查看命令

## cat命令

> **查看文件内容**

* **cat** filename
* **cat** filename filename ... **>** filename    将多个文件的内容合并成一个文件
* **cat >** filename    创建文件并直接键盘输入文件内容（Ctrl+z或Ctrl+c结束并生成文件）
* **cat >** (pathname)/filename **<<** EFO    最后输入EOF退出（EFO可以换成任意定义的字符）
* **tac** filename    反向显示

## more命令

> **查看文件内容，翻页**

| **b**     | **向上滚动一屏** |
| --------- | ---------------- |
| **f**     | **向下滚动一屏** |
| **Space** | **向下滚动一屏** |
| **Enter** | **向下滚动一行** |
| **q**     | **退出**         |
| **v**     | **调用vi**       |

## head命令

> **查看文件的开头或倒数n行**

* **head**  filename **-n** number

  ```shell
  head -n 10 demo.txe    开头10行
  ```

## free命令

> **查看RAM和swap区的使用情况**

* **free**    以字节的大小显示
* **free -h**    以易读的大小显示

## df命令

> **查看空间使用情况**

* **df**    以字节的大小显示
* **df -h**    以易读的大小显示

# 权限，用户，组命令

## chmod命令

> **修改文件权限命令**

一个文件访问权限有三组，分别为”**当前用户，当前用户所在的组的所有用户，其它用户**“，对应”**u(user)，g(group)，o(other user)**“

* 权限范围

  u(user)

  g(group)

  o(other user)

  a(all)

* 权限代号

  r    读（4）

  w    写（2）

  x    执行（1）

  \-    删除权限（0）

* 用法

  * 字母

    ```
    chmod u=r demo.txt
    chmod u+r demo.txt
    chmod u-r demo.txt
    chmod u=r,g+r,o-r demo.txt
    chmod a+x demo.txt
    chmod +x demo.txt
    ```

    +x与a+x的结果相同，不指明特定的权限范围时，命令对所有的用户和组起作用

  * 数字

    ```
    chmod 777 demo.txt
    chmod 755 demo.txt
    ```

    权限对应的数字是按照权限代号对应的数字相加得出的