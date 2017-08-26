/**
 * 使用的是单例模式
 */
var index = {
    init: function() {
        var me = this;
        me.render();
        me.bind();
    },
    render: function() {
        var me = this;
        //tab切换
        me.tab = $("#tabfirst li");
        //鼠标滑过显示下拉
        me.skin = $('#skin');
        me.setup = $('#setup');
        me.more = $('#more');
        //页面换肤
        me.jy = $('#jy');
        me.qx = $('#qx');
        me.qt = $('#qt');
        me.body = $("body");
        //返回顶部
        me.win = $(window);
        me.back = $('#back-to-top');
        me.bdhm = $('body,html');
    },
    bind: function() {
        var me = this;
        //tab切换
        me.tab.each(function(index) {
            $(this).click(function() {
                $("div.contentin").removeClass("contentin");
                $("#tabfirst li.tabin").removeClass("tabin");
                $("div.contentfirst").eq(index).addClass("contentin");
                $(this).addClass("tabin");
            })
        })
        //鼠标滑过显示下拉
        me.skin.hover(function() {
            $(this).children("ul").slideToggle(100);
        });
        me.setup.hover(function() {
            $(this).children("ul").slideToggle(100);
        });
        me.more.hover(function() {
            $(this).children("aside").slideToggle(100);
        });
        //页面换肤
        me.jy.click(function() {
            me.body.css("background-image", "url(img/jy.jpg)")
        });
        me.qx.click(function() {
            me.body.css("background-image", "url(img/qx.jpg)")
        });
        me.qt.click(function() {
            me.body.css("background-image", "url(img/qt.jpg)")
        });
        //返回顶部
        me.win.scroll(function() {
            //当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
            if (me.win.scrollTop() > 100) {
                me.back.fadeIn(1000);
            } else {
                me.back.fadeOut(1000);
            }
        });
        //当点击跳转链接后，回到页面顶部位置
        me.back.click(function() {
            me.bdhm.animate({ scrollTop: 0 }, 300);
        });
    }
};
index.init();

