# 查询硬盘SN号

## 查询裸盘中SN号

### lsblk查询SN号

```shell
lsblk -o name,size,model,verdor,serial # 可以直接返回裸盘SN号
```

### lshw查询SN号

```shell
lshw
```

## 查询Raid中SN号

### 使用storcli64工具查询Raid情况

```shell
/opt/MegaRAID/storcli/storcli64 /c0 show all
```

### 查询磁盘信息

```shell
/opt/MegaRAID/storcli/storcli64 /c0 /eall /sall show all
```
