---
layout: post
title: Ubuntu 永久修改 DNS
date: 2025-04-11
tags: DNS
categories: Ubuntu
---

## 修改 systemd-resolved 配置

```bash
sudo nano /etc/systemd/resolved.conf
```

取消注释并修改以下行：

```bash
Copy
[Resolve]
DNS=1.1.1.1 223.5.5.5 # 指定 DNS 服务器（多个用空格分隔）。
Domains=~. # 表示所有域名查询都使用这些 DNS。
```

## 重启 systemd-resolved

```bash
sudo systemctl restart systemd-resolved
```

## 验证 DNS

```bash
resolvectl status
```
