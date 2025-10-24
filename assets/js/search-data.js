// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "Edit the `_data/repositories.yml` and change the `github_users` and `github_repos` lists to include your own GitHub profile and repositories.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-excel导入图片url并显示图片",
        
          title: "Excel导入图片URL并显示图片",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/Excel%E5%AF%BC%E5%85%A5%E5%9B%BE%E7%89%87URL%E5%B9%B6%E6%98%BE%E7%A4%BA%E5%9B%BE%E7%89%87/";
          
        },
      },{id: "post-shell命令汇总",
        
          title: "Shell命令汇总",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/Shell%E5%91%BD%E4%BB%A4%E6%B1%87%E6%80%BB/";
          
        },
      },{id: "post-minio-client-命令",
        
          title: "Minio Client 命令",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/Minio-Client%E5%91%BD%E4%BB%A4/";
          
        },
      },{id: "post-foxmail-添加-gmail",
        
          title: "Foxmail 添加 Gmail",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/Foxmail%E6%B7%BB%E5%8A%A0Gmail/";
          
        },
      },{id: "post-dockerignore-介绍",
        
          title: "Dockerignore 介绍",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/Dockerignore%E4%BB%8B%E7%BB%8D/";
          
        },
      },{id: "post-部署-k8s",
        
          title: "部署 K8S",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/%E9%83%A8%E7%BD%B2K8S/";
          
        },
      },{id: "post-优化-sqlite-性能",
        
          title: "优化 SQLite 性能",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/%E4%BC%98%E5%8C%96SQLite%E6%80%A7%E8%83%BD/";
          
        },
      },{id: "post-django-q2-启动-multiple-queues",
        
          title: "Django Q2 启动 Multiple Queues",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/Django-Q2%E5%90%AF%E5%8A%A8Multiple-Queues/";
          
        },
      },{id: "post-ubuntu-防止合笔记本后挂起",
        
          title: "Ubuntu 防止合笔记本后挂起",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/Ubuntu%E9%98%B2%E6%AD%A2%E5%90%88%E7%AC%94%E8%AE%B0%E6%9C%AC%E5%90%8E%E6%8C%82%E8%B5%B7/";
          
        },
      },{id: "post-ubuntu-永久修改-dns",
        
          title: "Ubuntu 永久修改 DNS",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/Ubuntu%E6%B0%B8%E4%B9%85%E4%BF%AE%E6%94%B9DNS/";
          
        },
      },{id: "post-sql-执行顺序",
        
          title: "SQL 执行顺序",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/SQL%E6%89%A7%E8%A1%8C%E9%A1%BA%E5%BA%8F/";
          
        },
      },{id: "post-docker数据迁移方案",
        
          title: "Docker数据迁移方案",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/Docker%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E6%96%B9%E6%A1%88/";
          
        },
      },{id: "post-开启-swap",
        
          title: "开启 swap",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/%E5%BC%80%E5%90%AFswap/";
          
        },
      },{id: "post-netplan-gateway4-弃用报错",
        
          title: "NetPlan Gateway4 弃用报错",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/NetPlan-Gateway4%E5%BC%83%E7%94%A8%E6%8A%A5%E9%94%99/";
          
        },
      },{id: "post-python-线程-进程-协程的关系与区别和使用方式",
        
          title: "Python 线程、进程、协程的关系与区别和使用方式",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/Python%E7%BA%BF%E7%A8%8B-%E8%BF%9B%E7%A8%8B-%E5%8D%8F%E7%A8%8B%E7%9A%84%E5%85%B3%E7%B3%BB%E4%B8%8E%E5%8C%BA%E5%88%AB%E5%92%8C%E4%BD%BF%E7%94%A8%E6%96%B9%E5%BC%8F/";
          
        },
      },{id: "post-docker-安装",
        
          title: "Docker 安装",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/Docker%E5%AE%89%E8%A3%85/";
          
        },
      },{id: "post-git-命令汇总",
        
          title: "Git 命令汇总",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/Git%E5%91%BD%E4%BB%A4%E6%B1%87%E6%80%BB/";
          
        },
      },{id: "post-python-类型注解",
        
          title: "Python 类型注解",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/Python%E9%9D%99%E6%80%81%E7%B1%BB%E5%9E%8B%E6%B3%A8%E8%A7%A3/";
          
        },
      },{id: "post-python-装饰器实现认证逻辑",
        
          title: "Python 装饰器实现认证逻辑",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/Python%E8%A3%85%E9%A5%B0%E5%99%A8%E5%AE%9E%E7%8E%B0%E8%AE%A4%E8%AF%81%E9%80%BB%E8%BE%91/";
          
        },
      },{id: "post-mmistakes-操作汇总",
        
          title: "MMistakes 操作汇总",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/MMistakes%E6%93%8D%E4%BD%9C%E6%B1%87%E6%80%BB/";
          
        },
      },{id: "post-校时方法",
        
          title: "校时方法",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/Ubuntu%E6%A0%A1%E6%97%B6%E6%96%B9%E6%B3%95/";
          
        },
      },{id: "post-docker-更换阿里镜像仓库",
        
          title: "Docker 更换阿里镜像仓库",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/Docker%E6%9B%B4%E6%8D%A2%E9%98%BF%E9%87%8C%E9%95%9C%E5%83%8F%E4%BB%93%E5%BA%93/";
          
        },
      },{id: "post-查询硬盘-sn-号",
        
          title: "查询硬盘 SN 号",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/%E6%9F%A5%E8%AF%A2%E7%A1%AC%E7%9B%98SN%E5%8F%B7/";
          
        },
      },{id: "post-centos-校时",
        
          title: "Centos 校时",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/Centos%E6%A0%A1%E6%97%B6/";
          
        },
      },{id: "post-centos-查看网关",
        
          title: "Centos 查看网关",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/Centos%E6%9F%A5%E7%9C%8B%E7%BD%91%E5%85%B3/";
          
        },
      },{id: "post-centos-修改静态-ip",
        
          title: "Centos 修改静态 IP",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/Centos%E4%BF%AE%E6%94%B9%E9%9D%99%E6%80%81IP/";
          
        },
      },{id: "post-centos-修改-yum-源为阿里源",
        
          title: "Centos 修改 yum 源为阿里源",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/Centos%E4%BF%AE%E6%94%B9yum%E6%BA%90%E4%B8%BA%E9%98%BF%E9%87%8C%E6%BA%90/";
          
        },
      },{id: "post-centos-修改-dns-地址",
        
          title: "Centos 修改 DNS 地址",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/Centos%E4%BF%AE%E6%94%B9DNS%E5%9C%B0%E5%9D%80/";
          
        },
      },{id: "post-配置聚合网口",
        
          title: "配置聚合网口",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/%E9%85%8D%E7%BD%AE%E8%81%9A%E5%90%88%E7%BD%91%E5%8F%A3/";
          
        },
      },{id: "post-ubuntu-18-04-4-安装-jdk",
        
          title: "Ubuntu 18.04.4 安装 JDK",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/Ubuntu-18.04.4-%E5%AE%89%E8%A3%85JDK/";
          
        },
      },{id: "post-二进制部署-docker",
        
          title: "二进制部署 Docker",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/%E4%BA%8C%E8%BF%9B%E5%88%B6%E9%83%A8%E7%BD%B2Docker/";
          
        },
      },{id: "post-常用正则表达式记录",
        
          title: "常用正则表达式记录",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/%E5%B8%B8%E7%94%A8%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F%E8%AE%B0%E5%BD%95/";
          
        },
      },{id: "post-lvm-简介",
        
          title: "LVM 简介",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/LVM/";
          
        },
      },{id: "post-检查硬件情况",
        
          title: "检查硬件情况",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/%E6%A3%80%E6%9F%A5%E7%A1%AC%E4%BB%B6%E6%83%85%E5%86%B5/";
          
        },
      },{id: "post-iptables-封闭端口",
        
          title: "Iptables 封闭端口",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/Iptable%E5%B0%81%E9%97%AD%E7%AB%AF%E5%8F%A3/";
          
        },
      },{id: "post-storcli-使用文档",
        
          title: "Storcli 使用文档",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/Storcli%E4%BD%BF%E7%94%A8%E6%96%87%E6%A1%A3/";
          
        },
      },{id: "post-ubuntu-设置-root-用户登录",
        
          title: "Ubuntu 设置 root 用户登录",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/Ubuntu%E8%AE%BE%E7%BD%AEroot%E7%94%A8%E6%88%B7%E7%99%BB%E5%BD%95/";
          
        },
      },{id: "post-ubuntu-下载离线安装包",
        
          title: "Ubuntu 下载离线安装包",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/Ubuntu%E4%B8%8B%E8%BD%BD%E7%A6%BB%E7%BA%BF%E5%AE%89%E8%A3%85%E5%8C%85/";
          
        },
      },{id: "post-常用-es-操作汇总",
        
          title: "常用 ES 操作汇总",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/ES%E5%91%BD%E4%BB%A4%E6%B1%87%E6%80%BB/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%32%31%37%71%75%61%6E%65%72@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/quaner-dev", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-wechat_qr',
        title: 'Wechat_qr',
        section: 'Socials',
        handler: () => {
          window.open("", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
