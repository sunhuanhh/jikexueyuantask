$(document).ready(function(){

	//点击切换右侧内容样式
	//横向列表样式	
	$(".list-icon").click(function(){
		$(".lesson-list1 ul li").unbind();//unbind() 方法移除被选元素的事件处理程序
		$("#changeid").addClass("lesson-list2").removeClass("lesson-list1");
		//右侧内容滑动展示
		$(".lesson-list2 ul li").mouseover(function(){
			$(this).find(".lessonplay").css("opacity","1");
			$(this).find(".lesson-infor").css({"height":"88px"});
			$(this).find(".lesson-infor p").css({"opacity":"1","display":"block","height":"36px"});
			$(this).find(".lesson-infor .lessonicon-box").css({"bottom":"-45px"});
			$(this).find(".lesson-infor .timeandicon .learn-number").css({"display":"block"});
			$(this).find(".lesson-infor .zhongji").css({"display":"block"});
		}).mouseout(function(){
			$(this).find(".lessonplay").css("opacity","0");
			$(this).find(".lesson-infor").css({"height":"88px"});
			$(this).find(".lesson-infor p").css({"opacity":"1","display":"block","height":"36px"});
			$(this).find(".lesson-infor .lessonicon-box").css({"bottom":"-45px"});
			$(this).find(".lesson-infor .timeandicon .learn-number").css({"display":"block"});
			$(this).find(".lesson-infor .zhongji").css({"display":"block"});
		})
	})

	//块级列表样式
	$(".kuai-icon").click(function(){
		$(".lesson-list2 ul li").unbind();
		$("#changeid").addClass("lesson-list1").removeClass("lesson-list2");
		//右侧内容滑动展示
		$(".lesson-list1 ul li").mouseover(function(){
			$(this).find(".lessonplay").css("opacity","1");
			$(this).find(".lesson-infor").css({"height":"auto"});
			$(this).find(".lesson-infor p").css({"opacity":"1","display":"block","height":"52px"});
			$(this).find(".lesson-infor .lessonicon-box").css({"bottom":"-45px"});
			$(this).find(".lesson-infor .timeandicon .learn-number").css({"display":"block"});
			$(this).find(".lesson-infor .zhongji").css({"display":"block"});
		}).mouseout(function(){
			$(this).find(".lessonplay").css("opacity","0");
			$(this).find(".lesson-infor").css({"height":"88px"});
			$(this).find(".lesson-infor p").css({"opacity":"0","display":"none","height":"0"});
			$(this).find(".lesson-infor .lessonicon-box").css({"bottom":"-20px"});
			$(this).find(".lesson-infor .timeandicon .learn-number").css({"display":"none"});
			$(this).find(".lesson-infor .zhongji").css({"display":"none"});
		})
	})

	//右侧内容滑动展示
	$(".lesson-list1 ul li").mouseover(function(){
		$(this).find(".lessonplay").css("opacity","1");
		$(this).find(".lesson-infor").css({"height":"auto"});
		$(this).find(".lesson-infor p").css({"opacity":"1","display":"block","height":"52px"});
		$(this).find(".lesson-infor .lessonicon-box").css({"bottom":"-45px"});
		$(this).find(".lesson-infor .timeandicon .learn-number").css({"display":"block"});
		$(this).find(".lesson-infor .zhongji").css({"display":"block"});
	}).mouseout(function(){
		$(this).find(".lessonplay").css("opacity","0");
		$(this).find(".lesson-infor").css({"height":"88px"});
		$(this).find(".lesson-infor p").css({"opacity":"0","display":"none","height":"0"});
		$(this).find(".lesson-infor .lessonicon-box").css({"bottom":"-20px"});
		$(this).find(".lesson-infor .timeandicon .learn-number").css({"display":"none"});
		$(this).find(".lesson-infor .zhongji").css({"display":"none"});
	})

	//左侧导航
	$(".aside-cList li").mouseover(function(){
		$(this).find(".list-show").css({"display":"block"});
	}).mouseout(function(){
		$(this).find(".list-show").css({"display":"none"});
	})

	//搜索
	$("#search-btn").click(function(){
		$(".searchbox").css({"opacity":"1","display":"block"});
		$("#searchbox").addClass("scale");
	})
	$("#close-btn").click(function(){
		$(".searchbox").css({"opacity":"0","display":"none"});
		$("#searchbox").removeClass("scale");
	})

	// 顶部导航
	$(".header-nav li").mouseover(function(){
		$(this).children(".submenu").css({"display":"block"});
	}).mouseout(function(){
		$(this).children(".submenu").css({"display":"none"});
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