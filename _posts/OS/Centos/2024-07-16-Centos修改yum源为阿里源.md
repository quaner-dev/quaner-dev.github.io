---
layout: post
title: Centos 修改 yum 源为阿里源
date: 2024-07-16
tags: Yum
categories: Centos
---

## 备份系统自带 yum 源配置文件

```shell
mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup
```

## 下载 ailiyun 的 yum 源配置文件

### CentOS7

```shell
wget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo
```

### CentOS6

```shell
wget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-6.repo
```

## 重新生成缓存

```shell
yum makecache
```
