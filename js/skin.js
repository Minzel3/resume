//背景轮播
window.onload=function(){
    var imgs = ["images/bg_xnet.jpg","images/bg_shoulei.jpg"];//获取本地背景图片地址
    var i = 0;
    var head=document.getElementById("banner");
    function time(){
    	i++;
        i=i%2;  //在0与1之间循环
        head.style.background="url("+imgs[i]+")";
        head.style.backgroundSize="cover";
        head.style.backgroundRepeat="no-repeat";
    }
    setInterval(time,20000); //计时
};
//结束
//submenu侧边栏
$('.submenu_a').click(function(){
	$('.submenu').css('right','0')
})
//结束
//导航栏跟随原点
$(function(){
	$('.act_1').hover(function(){
		$('.show').css('top','24px')
	})
	$('.act_2').hover(function(){
		$('.show').css('top','84px')
	})
	$('.act_3').hover(function(){
		$('.show').css('top','144px')
	})
	$('.act_4').hover(function(){
		$('.show').css('top','204px')
	})
	$('.act_5').hover(function(){
		$('.show').css('top','264px')
	})
	$('.act_6').hover(function(){
		$('.show').css('top','324px')
	})
})
//结束
//头像弹框
$(function(){                       //禁止页面滚动
	function unScroll() {
		    var top = $(document).scrollTop();
		    $(document).on('scroll.unable',function (e) {
			        $(document).scrollTop(top);
		    })
	}

function removeUnScroll() {        //接触页面禁止滚动
	    $(document).unbind("scroll.unable");
};
$('.frame').click(function(){
	$('.summ').css('display','block');
})
$('.over').click(function(){
	$('.summ').css('display','none');
})
})
//结束
//锚点链接
$('.Left_nav li a[href^="#"]').click(function(e){
	e.preventDefault();
	$('html, body').animate({scrollTop: $(this.hash).offset().top}, 600);});
//返回顶部
$(function(){
	$(window).scroll(function() {
		if($(window).scrollTop() >= 300){
			$('.Top').fadeIn(300);
		}else{
			$('.Top').fadeOut(300);
		}
	});
	$('.Top').click(function(){$('html,body').animate({scrollTop: '0px'}, 600);});
});
//结束

$(document).ready(function(){
	var a,b,c;
    a = $(window).height();    //浏览器窗口高度
    var group = $(".skills");
    $(window).scroll(function(){
        b = $(this).scrollTop();   //页面滚动的高度
        c = group.offset().top;    //元素距离文档（document）顶部的高度
        if(a+b>c){
        	$('.skil_comm').addClass("rubberBand");
        	$('.skil_cob p').addClass("fadeInBottom");
        	$('.jindu').addClass("fadeInRight");
        }
    });
});

$(document).ready(function(){
	var a,b,c;
    a = $(window).height();    //浏览器窗口高度
    var group = $(".educat");
    $(window).scroll(function(){
        b = $(this).scrollTop();   //页面滚动的高度
        c = group.offset().top;    //元素距离文档（document）顶部的高度
        if(a+b>c){
        	$('.edu_t').addClass("fadeInLeft");
        	$('.edu_left').addClass("fadeInLeft");
        	$('.edu_right').addClass("fadeInRight");
        }
    });
});

$(document).ready(function(){
	var a,b,c;
    a = $(window).height();    //浏览器窗口高度
    var group = $(".cot_w");
    $(window).scroll(function(){
        b = $(this).scrollTop();   //页面滚动的高度
        c = group.offset().top;    //元素距离文档（document）顶部的高度
        if(a+b>c){
        	$('.cot_w').addClass("fadeInLeft1");
        }
    });
});


$(document).ready(function() {
        var voice = document.getElementById('voice'); //获取到audio元素
        voice.autoplay = true;
          $('.but').click(function() { //点击文字事件
            if (voice.paused) { //判断音乐是否在播放中，暂停状态
                voice.play(); //音乐播放
                $(this).css('background','url(images/01.png)'),
                $('.audio_i').addClass("rotate")
            } else { //播放状态
                voice.pause(); //音乐停止
                $(this).css('background','url(images/02.png)'),
                $('.audio_i').removeClass("rotate")
            }
        });
      });
$(function(){
	$(".a_i").hover(
		function () {
			$(this).addClass("rubberBand");
		},
		function () {
			$(this).removeClass("rubberBand");
		}
		);
})

