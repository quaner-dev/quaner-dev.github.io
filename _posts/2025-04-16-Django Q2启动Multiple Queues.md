# Django Q2启动Multiple Queues

## setting.py中增加ALT_CLUSTERS相关配置

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

## 启动long队列

```bash
Q_CLUSTER_NAME=long python manage.py qcluster
```
