---
layout: post
title: Pip安装MysqlClient
date: 2026-02-11
tags: MySQL mysqlclient Pip
categories: Python
---

## 说明

以下内容基于 mysqlclient 官方 README 的 Linux 安装说明整理，仅覆盖 Linux
环境的基础安装步骤与可选编译参数。

## 安装依赖（Linux）

mysqlclient 需要 Python 3 与 MySQL 的开发头文件/库，Debian/Ubuntu 与
RHEL/CentOS 可按下列方式安装依赖：

### Debian / Ubuntu

```bash
sudo apt-get install python3-dev default-libmysqlclient-dev build-essential pkg-config
```

## 安装 mysqlclient

依赖安装完成后，直接通过 pip 安装：

```bash
pip install mysqlclient
```
