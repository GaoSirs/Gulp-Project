/*
 * @Author: Happy
 * @Date:   2020-04-02 10:49:21
 * @Last Modified by:   Happy
 * @Last Modified time: 2020-04-02 20:38:21
 */

'use strict';


/***********************  引入插件  ************************/


var gulp = require('gulp'),
    htmlmin = require('gulp-htmlmin'),
    babel = require('gulp-babel'),
    clean = require('gulp-clean'),
    rename = require('gulp-rename'),
    cleanCSS = require('gulp-clean-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rev = require('gulp-rev'),
    imagemin = require('gulp-imagemin'),
    changed = require('gulp-changed'),
    revCollector = require('gulp-rev-collector'),
    runSequence = require('gulp4-run-sequence'),
    webserver = require('gulp-webserver'),
    sourcemaps = require('gulp-sourcemaps'),
    util = require('gulp-util');

var $ = require('gulp-load-plugins')();



/***********************  编写任务  ************************/



// 清理文件
gulp.task('clean', function() {
    return gulp.src(['./dist', './rev'], { read: false, allowEmpty: true })
        .pipe(clean());
})



// 处理html
gulp.task('html', function() {
    return gulp.src('src/**/*.html')
        .pipe(changed('./dist/'))
        .pipe(gulp.dest('./dist/'));
});




// 处理css
gulp.task('css', function() {
    return gulp.src('./src/css/**/*.css')
        .pipe(changed('./dist/css'))
        .pipe(rev())
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest('./dist/css'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('./rev/css'));
})




// 处理js
gulp.task('js_libs', function() {
    return gulp.src('./src/lib/**/*.js')
        .pipe(changed('./dist/lib'))
        .pipe(gulp.dest('./dist/lib'));
});

gulp.task('js', function() {
    return gulp.src(['./src/js/**/*.js'])
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(changed('./dist/js'))
        .pipe(uglify())
        .pipe(rev())
        .on('error', function(err) {
            util.log(util.colors.red('[Error--------log:]'), err.toString());
        })
        .pipe(gulp.dest('./dist/js'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('./rev/js'));
})



// 处理images
gulp.task('image', function() {
    return gulp.src(['./src/image/*'])
        .pipe(changed('./dist/'))
        .pipe(imagemin({
            optimizationLevel: 5,
            progressive: true,
            interlaced: true,
            multipass: true
        }))
        .pipe(rev())
        .pipe(gulp.dest('./dist/images'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('./rev/images'));
});



// 改变引用路径
gulp.task('rev', function() {
    var options = {
        removeComments: true, //清除HTML注释
        collapseWhitespace: true, //压缩HTML
        collapseBooleanAttributes: true, //省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true, //删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true, //删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true, //删除<style>和<link>的type="text/css"
        minifyJS: true, //压缩页面JS
        minifyCSS: true //压缩页面CSS
    };
    return gulp.src(['./rev/**/*.json', './src/**/*.html'])
        .pipe(revCollector({
            replaceReved: true,
            dirReplacements: {
                // 'css': '/dist/css',
                // 'js': '/dist/js'
            }
        }))
        .pipe(htmlmin(options))
        .pipe(gulp.dest('./dist'));
});


// 服务器热加载
gulp.task('webserver', function() {
    return gulp.src('./src')
        .pipe(webserver({
            livereload: true,
            open: true
        }));
});

// 监听
gulp.task('watch', function() {
    // 监听 html
    gulp.watch(['./src/**/*.html'], gulp.series('html'));
    // 监听 css
    gulp.watch(['./src/css/**/*.css'], gulp.series('css'));
    // 监听 js
    gulp.watch(['./src/js/**/*.js'], gulp.series('js'));
    // 监听 images
    gulp.watch(['./src/images/**/*'], gulp.series('image'));

});




/***********************  执行任务  ************************/



// 启动本地服务器 gulp dev
gulp.task('dev', function(cb) {
    runSequence(
        ['webserver', 'watch'],
        cb);
});



// 项目打包 gulp build
gulp.task('build', function(cb) {
    runSequence(
        ['clean'],
        ['html', 'css', 'js', 'image'],
        ['rev'],
        cb);
});