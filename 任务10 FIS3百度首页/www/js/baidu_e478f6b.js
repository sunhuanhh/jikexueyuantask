$(document).ready(function(){$("#tabfirst li").each(function(i){$(this).click(function(){$("div.contentin").removeClass("contentin"),$("#tabfirst li.tabin").removeClass("tabin"),$("div.contentfirst").eq(i).addClass("contentin"),$(this).addClass("tabin")})}),$("#skin").hover(function(){$(this).children("ul").slideToggle(100)}),$("#setup").hover(function(){$(this).children("ul").slideToggle(100)}),$("#more").hover(function(){$(this).children("aside").slideToggle(100)}),$("#jy").click(function(){$("body").css("background-image","url(img/jy.jpg)")}),$("#qx").click(function(){$("body").css("background-image","url(img/qx.jpg)")}),$("#qt").click(function(){$("body").css("background-image","url(img/qt.jpg)")}),$(window).scroll(function(){$(window).scrollTop()>100?$("#back-to-top").fadeIn(1e3):$("#back-to-top").fadeOut(1e3)}),$("#back-to-top").click(function(){$("body,html").animate({scrollTop:0},300)})});