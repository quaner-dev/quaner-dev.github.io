# Minio Client命令

## 下载并安装mc

使用如下命令下载安装包，并安装

```bash
wget https://dl.min.io/client/mc/release/linux-amd64/mc
chmod +x mc
./mc --help
```

## Bucket操作

### 查看Bucket列表

`mc ls`

### 查看Bucket下文件或文件夹

`mc ls local/hit`

### 创建Bucket

`mc mb local/hit`

### 删除Bucket

`mc rm local/hit/hit/2025/01`
