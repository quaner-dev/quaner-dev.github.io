---
layout: post
title: NetPlan Gateway4 弃用报错
date: 2025-02-06
tags: Netplan
categories: Ubuntu
---

## 问题

```bash
gateway4 has been deprecated, use default routes instead.
See the 'Default routes' section of the documentation for more details.
```

## 问题原因

此错误代表 gateway4 已经被弃用，需要更换为 to: default 和 via 来替代

## 解决方法

1. 替代前

   ```yaml
   gateway4: 192.168.1.1
   ```

2. 替代后

   ```yaml
   routes:
     - to: default
       via: 192.168.1.1
   ```
