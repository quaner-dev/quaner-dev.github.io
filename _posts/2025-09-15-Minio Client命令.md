# Minio Client 命令

## 下载并安装 mc

使用如下命令下载安装包，并安装

```bash
wget https://dl.min.io/client/mc/release/linux-amd64/mc
chmod +x mc
./mc --help
```

## Bucket 操作

### 查看 Bucket 列表

`mc ls`

### 查看 Bucket 下文件或文件夹

`mc ls local/hit`

### 创建 Bucket

`mc mb local/hit`

### 删除 Bucket

`mc rm local/hit/hit/2025/01`
