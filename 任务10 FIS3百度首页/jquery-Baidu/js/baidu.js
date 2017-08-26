$(document).ready(function() {
	//tab切换
    $("#tabfirst li").each(function(index) {
        $(this).click(function() {
            $("div.contentin").removeClass("contentin");
            $("#tabfirst li.tabin").removeClass("tabin");
            $("div.contentfirst").eq(index).addClass("contentin");
            $(this).addClass("tabin");
        })
    })

    //鼠标滑过显示下拉
    $("#skin").hover(function() {
        $(this).children("ul").slideToggle(100);
    })

    $("#setup").hover(function() {
        $(this).children("ul").slideToggle(100);
    })

    $("#more").hover(function() {
        $(this).children("aside").slideToggle(100);
    })

    //页面换肤
    $("#jy").click(function() {
        $("body").css("background-image", "url(img/jy.jpg)")
    })

    $("#qx").click(function() {
        $("body").css("background-image", "url(img/qx.jpg)")
    })

    $("#qt").click(function() {
        $("body").css("background-image", "url(img/qt.jpg)")
    })

    //返回顶部
    $(window).scroll(function() {
    	//当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
        if ($(window).scrollTop() > 100) {
            $("#back-to-top").fadeIn(1000);
        } else {
            $("#back-to-top").fadeOut(1000);
        }
    });
    //当点击跳转链接后，回到页面顶部位置
    $("#back-to-top").click(function() {
        $('body,html').animate({ scrollTop: 0 }, 300);
    });

})
