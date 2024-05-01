---
layout: post
title: Ubuntu设置root用户登录
date: 2023-11-24
description: Ubuntu设定root登录
tags: ssh
chart:
  vega_lite: true
---

# ubuntu设置root用户登录

## 设置root用户密码

```bash
# 设置root用户密码
# 输入两次root用户密码，最终返回password updated successfully，则表示密码设定成功
sudo passwd root
```

## 设置root用户登录

```bash
# 修改sshd配置文件
sudo vim /etc/ssh/sshd_config

# 反注释PermitRootLogin，并修改参数为yes
PermitRootLogin yes
# 反注释PasswordAuthentication，并修改参数为yes
PasswordAuthentication yes

# 按ESC，保存sshd_config
:wq
```

## 重启SSH服务

```bash
# 重启ssh服务
sudo systemctl restart sshd
```

## root用户登录测试

使用root账户直接登录服务器，登录成功则完成设置
