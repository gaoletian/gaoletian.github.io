
[Source](https://www.jianshu.com/p/8c22cdfc0ffd "Permalink to docker volume - 简书")

# docker volume - 简书

众所周知，Docker Image可以理解成多个只读文件叠加而成，因此Docker Image是只读的。

当我们将其运行起来，就相当于在只读的Image外包裹了一层读写层变成了容器。

当你删除容器之后，使用这个镜像重新创建一个容器，此时的镜像的只读层还和原来的一样，但是你在读写层的修改全部都会丢失。

那么问题就来了，如果想要持久化在读写层的数据，该怎么利用docker做到呢？

docker使用volume实现数据的持久化，不仅如此volume还能帮助容器和容器之间，容器和host之间共享数据。

## Volume如何在mac上持久化数据

如果想要持久化数据，就必须将读写层的数据暂存在host machine，因此当你使用:

* `docker run .... -v /data`
* `docker volume create --name **`

以上两种指令都可以帮助你创建一个Volume，其实是在host machine上创建一个directory。

常在mac上用docker的人应该知道，和Linux不同，在mac上用docker会在mac上启动一个虚拟机运行docker，因此volume创建的directory并不在你的machine上，而是在虚拟机中。

#### 那么如何知道我的volume创建在host machine的什么位置呢？

* `docker volume ls`可以看到当前所有的volume  

image.png

你可以看到上图中有volume有一些是自己命名的有一些是一串数字：  
\- 自己命名的是使用`docker volume create --name **`创建的，比如haha 是使用`docker volume create --name haha`  
\- 数字Volume是在创建container的同时创建的
* `docker volume inspect [volume name]` 即可获取这个volume在docker 虚拟机中的位置，根据上图可以看到haha在虚拟机中的地址是`/var/lib/docker/volumes/haha/_data`

#### 那么如何登录到docker虚拟机中呢？

* 执行：`screen ~/Library/Containers/com.docker.docker/Data/vms/0/tty`
    * 注意：当你的docker version是`18.06.0-ce-mac70 (26399)`采用上面的指令，如果不是这个version请使用`screen ~/Library/Containers/com.docker.docker/Data/com.docker.driver.amd64-linux/tty`
* 然后你会看到一个新的命令行，请按下`enter`，此时你就在docker虚拟机中了。
* 此时`cd /var/lib/docker/volumes/haha/_data`就是haha这个volume的

## 使用Volume有什么优势呢

* Volume可以在容器之间以及容器和主机之间共享和重用
* Volume在某一挂载的位置被修改，所以使用该volume的地方都会同时更新
* Volume的大小不会被加到容器本身上
* Volume会一直存在，直到没有任何容器使用它，才能使用命令`docker volume rm [volumes名字]`删除

## 主机和容器之间的数据共享

* `docker run -v /home/adrian/data:/data [image]`  
`-v A:B` A是在主机上的地址，B是在容器中的地址，这两个地址如果不存在都会创建，一旦容器运行，AB的会完全同步。

## 容器和容器之间的数据共享

使用`\--volumes-from`, `docker run -it -h NEWCONTAINER --volumes-from container-test debian /bin/bash` 意思是，将container-test这个container中的volume挂载到当前将要运行起来的容器中。前提是container-test中的volumes必须被创建过，但是container-test可以是被stop的，原因是volume只能被手动删除，不是随着容器停止而被删除

## 数据容器

准备一个容器专门用来做数据容器，比如`docker run -d -v /dbdata --name dbdata postgres echo Data-only container for postgres`运行postgres这个容器然后给他配置一个volume，其他容器都可以`\--volumes-from`到这个volume，数据容器可以不在运行状态甚至可以被删除，只要volume创建了即可。

## docker-compose 配置Volumes

虽然有很多方式创建volume但是感觉最方便的还是用`docker-compose`
    
    
    version: "3.2"
    services:
      web:
        image: alpine
        volumes:
          - ~/test:/data
    

docker-compose可以很方便的实现容器和容器间，容器和主机间数据共享。

* `容器和主机`: 在services定义（web）中使用`volumes`将主机的test挂载到容器的`/data`中
* `容器和容器`：可以通过在和service平级的volumes中定义volumes
    
        version: "3.2"
    services:
      web:
        image: alpine
        volumes:
          - mydata:/data
      web1:
        image: alpine
        volumes:
          - mydata:/data
    volumes:
      mydata:
      dbdata:
    

执行之后run`docker volume ls`可以看到创建了两个以project name开头的volume  

image.png

就是你创建的，然后`volumes: - mydata:/data` 就是将你创建的volume挂载到容器中，此时web和web1共享pezhang_mydata volume
* `不同docker compose文件中container的数据共享`和上面的方法一样但是需要`external`
    
          version: "3.2"
      services:
        web:
          image: alpine
          volumes:
            - mydata:/data
        web1:
          image: alpine
          volumes:
            - mydata:/data
      volumes:
        mydata:
          external: true
    

**但是前提你必须要有`mydata`这个volume 如果没有，可以使用`docker volume create --name=mydata创建`**。当你加上`external` docker不会帮你创建volume而是去找这个volume是否存在，如果找不到就会报错。

  
