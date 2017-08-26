$(document).ready(function() {
    $(window).on('load', function() {
        waterfall();
        //遍历的数据
        var dataInt = { "data": [{ "src": '1.jpg' }, { "src": '2.jpg' }, { "src": '3.jpg' }, { "src": '4.jpg' }, { "src": '5.jpg' },{ "src": '6.jpg' }, { "src": '7.jpg' }, { "src": '8.jpg' }, { "src": '9.jpg' }, { "src": '10.jpg' }] };
        $(window).on('scroll', function() {
            if (checkScrollSlide) {
            	$.each(dataInt.data, function(key, value) { //遍历变量dataInt中的data属性，key接收遍历的每个值的索引，value遍历的每一个值
                    //每遍历一个对象创建一个盒子
                    var oBox=$('<div>').addClass('box').appendTo($('#main'));
                    var oPic=$('<div>').addClass('pic').appendTo($(oBox));
                    var oImg=$('<img>').attr('src','img/'+$(value).attr('src')).appendTo($(oPic));
                })
                waterfall();
            }
        })
        window.onresize=function () {
            waterfall();
        }
    })
})
/*图片排列布局*/
function waterfall() {
    var $boxs = $('#main>div'); //必须用>,找main下一级div
    var wid = $boxs.eq(0).outerWidth(); //一列宽度,包含padding(main下一级div取一个)
    var cols = Math.floor($(window).width() / wid); //列数
    $('#main').width(wid * cols).css('margin', '0 auto'); //main的宽度
    var hArr = []; //前6张图片的高度放到一个数组内
    $boxs.each(function(index, value) { //index:遍历的每个参数的索引;value:遍历的每个元素
            // console.log(index);
            // console.log(value);
            var h = $boxs.eq(index).outerHeight(); //前六个的高度包含padding
            if (index < cols) { //操作的是前六个数据块
                hArr[index] = h;
                $(value).css({
                    'position': 'absolute',
                    'top': '0px',
                    'left': wid*index,
                })
            } else {
                var minH = Math.min.apply(null, hArr); //数组中最小值
                var minHIndex = $.inArray(minH, hArr); //最小值在数组中的索引
                //console.log(value);//DOM元素,DOM对象不能使用jQuery对象的任何方法
                $(value).css({
                    'position': 'absolute',
                    'top': minH + 'px',
                    'left': minHIndex * wid + 'px',
                })
                hArr[minHIndex] += $boxs.eq(index).outerHeight(); //改变数组的值(+=每个盒子的高)
            }
        }) //遍历所有box元素
    // console.log(hArr);
}
/*滚动加载*/
function checkScrollSlide() {
    var $lastBox = $('#main>div').last(); //取出最后一个元素
    var lastBoxDis = $lastBox.offset().top + Math.floor($lastBox.outerHeight() / 2); //盒子距离页面顶部距离+盒子自身高度的一半
    var scrollTop = $(window).scrollTop(); //页面滚走距离
    var documentH = $(window).height(); //页面的高度
    return (lastBoxDis < scrollTop + documentH) ? true : false;
}
