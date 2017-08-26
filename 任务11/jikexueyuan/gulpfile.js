var gulp = require('gulp');
var concat = require('gulp-concat');
var less = require('gulp-less');
var cssmin = require('gulp-minify-css');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');

//编译/加前缀 /合并/压缩css
gulp.task('css1', function () {
    var timestamp = +new Date();
    var flg = gulp.src('./css/style.less') //该任务针对的文件
        .pipe(less()) //编译less
        .pipe(autoprefixer({
            browsers: ['last 2 versions','Safari >0', 'Explorer >0', 'Edge >0', 'Opera >0', 'Firefox >=20'],//last 2 versions- 主流浏览器的最新两个版本
            cascade: true, //是否美化属性值
            remove:true //是否去掉不必要的前缀
        }))
        .pipe(concat('main.css')) //合并css
        .pipe(cssmin()) //压缩css
        .pipe(rename({suffix:'.min'})) //设置压缩文件名
        .pipe(gulp.dest('./dest')) //输出文件的存放地址
        return flg; //反馈给依赖他的模块--，告诉执行完毕
});

gulp.task('default',['css1']);
