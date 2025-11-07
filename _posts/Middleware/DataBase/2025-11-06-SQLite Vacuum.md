---
layout: post
title: SQLite Vacuum
date: 2025-11-06
tags: SQLite
categories: Database
---

## 空闲页概念

在SQLite中数据库即是文件，也即.sqlite或.db就是整个数据库，文件由固定大小的页组成，默认是4KB，当使用增删改操作时，原本存储在页中的就会数据就会空出来，这也页就是空闲页，但是SQLite不会立刻将空闲页的磁盘空间释放出来，而是将其标记为可重用，当有新的数据来时，就可以使用这些空白页

## VACUUM与空闲页的关系

VACUUM的作用就是数据库重整和垃圾回收的过程，流程如下

1. 创建新数据库：VACUUM会创建一个新的、临时的、空的数据库文件
2. 复制有效数据到新数据库中：复制有效数据到新数据库中，对于空闲页会直接跳过
3. 重建索引：在新数据库中，会将索引重建，用于提高检索效率
4. 替换旧数据库：SQLite用新数据库原子性的替换旧数据库
5. 释放空间：旧数据库文件被删除，释放空闲页占用的磁盘空间

## 手动VACUUM

1. 在SQLite命令中使VACUUM

   ```sql
   VACUUM;
   ```

2. 在特定表中使用VACUUM

   ```sql
   VACUUM table_name;
   ```

## 自动VACUUM（Auto-VACUUM）

自动VACUUM和手动VACUUM不相同，Auto-VACUUM可以将空闲页移到数据库末尾，从而减小数据库文件大小
