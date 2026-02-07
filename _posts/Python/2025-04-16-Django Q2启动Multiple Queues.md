---
layout: post
title: Django Q2 启动 Multiple Queues
date: 2025-04-16
tags: Django Django-Q2
categories: Django
---

## setting.py 中增加 ALT_CLUSTERS 相关配置

```python
Q_CLUSTER = {
    'name': 'myproject',
    'workers': 8,
    'recycle': 500,
    'timeout': 60,
    'compress': True,
    'save_limit': 250,
    'queue_limit': 500,
    'cpu_affinity': 1,
    'label': 'Django Q2',
    'redis': {
        'host': '127.0.0.1',
        'port': 6379,
        'db': 0, },
    'ALT_CLUSTERS': {
        'long': {
            'timeout': 3000,
            'retry': 3600,
            'max_attempts': 2,
        },
        'short': {
            'timeout': 10,
            'max_attempts': 1,
        },
    }
}
```

## 启动 long 队列

```bash
Q_CLUSTER_NAME=long python manage.py qcluster
```
