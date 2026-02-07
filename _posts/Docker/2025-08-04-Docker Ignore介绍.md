---
layout: post
title: Docker Ignore 介绍
date: 2025-08-04
tags: Dockerignore
categories: Docker
---

## 简介

你可以使用`.dockerignore`文件从构建中排除某些文件或文件夹

## 文件名和路径

当运行`build`命令时，构建客户端会在 root 目录中寻找名为`.dockerignore`的文件。如果文件存在，被匹配到的文件和文件夹都会被移除在构建上下文中

## 官方文档地址

`https://docs.docker.com/build/concepts/context/#dockerignore-files`
