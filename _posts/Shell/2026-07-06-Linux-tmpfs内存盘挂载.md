---
layout: post
title: Linux tmpfs 内存盘挂载
date: 2026-07-06
tags: tmpfs ramdisk mount
categories: Shell
---

## tmpfs 简介

`tmpfs` 是 Linux 提供的一种基于内存的临时文件系统，可以把一块内存空间挂载成目录使用。

它和普通磁盘目录的区别是：

- 读写速度快，适合临时文件、高频读写缓存、构建目录等场景
- 数据保存在内存中，重启、关机或卸载后会丢失
- 实际占用空间会按需使用，不是挂载多大就立刻占用多少内存
- 如果写入的数据超过限制，可能会影响系统内存，需要合理设置大小

## 临时挂载内存盘

下面示例将 `tmpfs` 挂载到 `/mnt/ramdisk`，大小限制为 `2G`。

```bash
# 创建挂载目录
mkdir -p /mnt/ramdisk

# 挂载 tmpfs
mount -t tmpfs -o size=2G tmpfs /mnt/ramdisk

# 查看挂载结果
df -h /mnt/ramdisk
```

## 卸载内存盘

卸载前需要确认没有进程正在使用该目录。

```bash
umount /mnt/ramdisk
```

如果提示目录正在使用，可以通过下面命令查看占用进程：

```bash
fuser -vm /mnt/ramdisk
```

## 开机自动挂载

如果希望系统启动后自动挂载，可以写入 `/etc/fstab`。

```bash
vim /etc/fstab
```

添加下面一行：

```bash
tmpfs /mnt/ramdisk tmpfs defaults,size=2G 0 0
```

参数说明：

| 参数           | 说明                    |
| -------------- | ----------------------- |
| `tmpfs`        | 文件系统类型            |
| `/mnt/ramdisk` | 挂载目录                |
| `defaults`     | 使用默认挂载参数        |
| `size=2G`      | 限制最大可使用容量为 2G |

配置完成后，不需要重启，可以直接测试挂载配置：

```bash
mount -a
df -h /mnt/ramdisk
```
