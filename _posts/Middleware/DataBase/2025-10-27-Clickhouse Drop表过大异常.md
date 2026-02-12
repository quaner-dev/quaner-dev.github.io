---
layout: post
title: Clickhouse Drop表过大异常
date: 2025-10-27
tags: Clickhouse
categories: Database
---

## 异常情况

CK日志显示Drop表失败，数据量超出允许删除大小

```log
Size (58.45 GB) is greater than max_[table/partition]_size_to_drop (50.00 GB) 2. File '/var/lib/clickhouse/flags/force_drop_table' intended to force DROP doesn't exist How to fix this:

Either increase (or set to zero) max_[table/partition]_size_to_drop in server config
Either pass a bigger (or set to zero) max_[table/partition]_size_to_drop through query settings
Either create forcing file /var/lib/clickhouse/flags/force_drop_table and make sure that ClickHouse has write permission for it. Example: sudo touch '/var/lib/clickhouse/flags/force_drop_table' && sudo chmod 666 '/var/lib/clickhouse/flags/force_drop_table'.
```

## 原因

默认情况下CK的`max_table_size_to_drop`为50G，超出50G的表会要求修改配置，或手动创建flag文件用于删除表

## 解决方法

### 方法一

临时解决方法，增加临时flag文件，用于Drop操作

```shell
sudo touch '/var/lib/clickhouse/flags/force drop table && sudo chmod 666 '/var/lib/clickhouse/flags/foorce_drop_table
```

### 方法二

长期解决方法。修改配置文件，增大或取消限制

由于max_table_size_to_drop是全局配置，因此可以放在所有可以配置全局变量的配置文件中，这里仅仅给出config.xml的配置方法

```shell
vim /etc/clickhouse-server/config.xml
```

在config.xml中增加配置

```xml
<max_table_size_to_drop>0</max_table_size_to_drop>
```
