# **gulp使用方法**

---

## **一、gulp安装**
#### 1. 全局安装<br/>
    npm install -g gulp
#### 2. 项目安装<br/>
    npm install gulp --save-gulp
#### 3. 初始化项目<br/>
    npm init
#### 4. 创建 gulpfile.js 文件,作为配置文件

---
## **二、gulp介绍**
gulp是前端自动化构建工具，主要用来设定程序自动处理静态资源的工作，用来对前端项目进行处理。<br/>
官方文档：[https://www.gulpjs.com.cn/][1]

---
## **三、gulp常用接口**
 **1. gulp.task() 注册任务**
```javascript
    gulp.task('html',function(){
        ...
    })
```

 **2. gulp.src() 文件入口**
```javascript
    gulp.src('src/**/*.html')
```

 **3. gulp.pipe() 任务管道**
```javascript
    gulp.pipe()
```

 **4. gulp.dest() 文件输出**
```javascript
    gulp.dest('./dist/')
```


------------
## **四、常用插件**
1. 自动加载插件
>使用：gulp-load-plugins<br/>
>安装：npm install --save-dev gulp-load-plugins<br/>
>参考：[https://www.npmjs.com/package/gulp-load-plugins][2]<br/>

2. 重命名
>使用：gulp-rename<br/>
>安装：npm install --save-dev gulp-rename<br/>
>参考：[https://www.npmjs.com/package/gulp-rename][3]<br/>

4. html压缩
>使用：gulp-htmlmin<br/>
>安装：npm install --save-dev gulp-htmlmin<br/>
>参考：[https://www.npmjs.com/package/gulp-htmlmin][4]<br/>

3. js文件压缩
>使用：gulp-uglify<br/>
>安装：npm install --save-dev gulp-uglify<br/>
>参考：[https://www.npmjs.com/package/gulp-uglify][5]<br/>

4. css文件压缩
>使用：gulp-clean-css<br/>
>安装：npm install --save-dev gulp-clean-css<br/>
>参考：[https://www.npmjs.com/package/gulp-clean-css][6]<br/>

5. html文件压缩
>使用：gulp-htmlmin<br/>
>安装：npm install --save-dev gulp-htmlmin<br/>
>参考：[https://www.npmjs.com/package/gulp-htmlmin][7]

6. 图片压缩
>使用：gulp-imagemin
>安装：npm install --save-dev gulp-imagemin<br/>
>参考：[https://www.npmjs.com/package/gulp-imagemin][7]<br/>

7. 文件合并
>使用：gulp-concat<br/>
>安装: npm install --save-dev gulp-concat<br/>
>参考：[https://www.npmjs.com/package/gulp-concat][8]<br/>

8. 服务器
>使用：gulp-webserver<br/>
>安装：npm install --save-dev gulp-webserver<br/>
>参考：[https://www.npmjs.com/package/gulp-webserver][9]<br/>


  [1]: https://www.gulpjs.com.cn/
  [2]: https://www.npmjs.com/package/gulp-load-plugins
  [3]: https://www.npmjs.com/package/gulp-rename
  [4]: https://www.npmjs.com/package/gulp-htmlmin
  [5]: https://www.npmjs.com/package/gulp-uglify
  [6]: https://www.npmjs.com/package/gulp-clean-css
  [7]: https://www.npmjs.com/package/gulp-htmlmin
  [8]: https://www.npmjs.com/package/gulp-imagemin
  [9]: https://www.npmjs.com/package/gulp-concat
  [10]: https://www.npmjs.com/package/gulp-webserver