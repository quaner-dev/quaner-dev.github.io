---
layout: post
title: 搭建 Python Venv 环境
date: 2026-02-11
tags: Venv Virtualenv
categories: Python
---

## venv 简介

venv 是 Python 内置的虚拟环境工具，用于为项目创建隔离的依赖环境，避免不同项目之间的包版本冲突。

## 检查 Python 版本

```bash
python --version
# 或者
python3 --version
```

## 在 Ubuntu 安装 venv

```bash
sudo apt update
sudo apt install -y python3-venv
```

## 创建虚拟环境

在项目目录中执行（示例目录名为 `xxx`）：

```bash
python3 -m venv xxx
```

## 激活虚拟环境

```bash
source xxx/bin/activate
```

激活成功后，终端前会出现 `(xxx)` 标识。

## 安装依赖

```bash
pip install -r requirements.txt
```

## 导出依赖

```bash
pip freeze > requirements.txt
```

## 退出虚拟环境

```bash
deactivate
```

## 删除虚拟环境

直接删除 `venv` 目录即可。

## 常见问题

### pip 使用国内镜像

```bash
pip install -i https://pypi.tuna.tsinghua.edu.cn/simple some-package
```
