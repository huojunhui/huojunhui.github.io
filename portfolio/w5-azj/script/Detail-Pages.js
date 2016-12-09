
var n = 0;
function fun(){	
	$(".view-picbox").animate({"margin-left":(-110*n)},500);
	 n++;
	 n = n == 6 ? 0 : n;
	 if(n==3){
	 	n=0
	 }
	 $(".pic-f").click(function(){
	 	$(".view-picbox").css("margin-left",-110)
	 })
	  $(".pic-r").click(function(){
	 	$(".view-picbox").css("margin-left",110)
	 })
}
var t = setInterval(fun,1000);
$(".view-picbox img").click(function(){
	var src = $(this).attr("src")
	$(".big-pic").attr("src",src)
})
$(".heart").click(function(){
	$(this).attr("src","../images/x-image/blueheart.png")
})
// 人数加减
// 成人
$(".add1").click(function(){
	var txt = $(".btn-num1").val();
		var a = Number(txt) + 1;
		$(".btn-num1").val(a);
})
$(".min1").click(function(){
	var txt = $(".btn-num1").val();
		var a = Number(txt) - 1;
		if(a<=1){
			$(".btn-num1").val(1);
		}else(
				$(".btn-num1").val(a)
			)
		
})
// 儿童
$(".add2").click(function(){
	var txt = $(".btn-num2").val();
		var a = Number(txt) + 1;
		$(".btn-num2").val(a);
})
$(".min2").click(function(){
	var txt = $(".btn-num2").val();
		var a = Number(txt) - 1;
		if(a<=1){
			$(".btn-num2").val(1);
		}else(
				$(".btn-num2").val(a)
			)
		
})
// 儿童标准
$(".children").mouseenter(function(){
	$(".childbz").css("display","block")
}).mouseleave(function(){
	$(".childbz").css("display","none")
})

// 历史组团
var c=0;
function team(){	
	$(".team-list").animate({"margin-left":(-243*c)},500);
	 c++;
	 c = c == 6 ? 0 : c;
	 if(c==3){
	 	c=0
	 }
	 $(".xleft").click(function(){
	 	$(".team-list").css("margin-left",-110)
	 })
	  $(".xright").click(function(){
	 	$(".team-list").css("margin-left",110)
	 })
}
var t = setInterval(team,1000);




$(".nlist .num-dahy").mouseenter(function(){
	var index = $(this).index();
	$(".ndian li").index().addClass("yuan").siblings().removeClass("yuan")
})
// 置顶
$(window).scroll(function(){
			var stop = $(this).scrollTop();
			if (stop>10) {
				$(".j-block").css("display","block");
			}else{
				$(".j-block").css("display","none");
			}
		});
		$(".j-block").click(function(){
			// $(window).scrollTop(0);  //直接返回顶部
			$("html,body").animate({scrollTop:0},1000);  //动画的方式混动到顶部
		})
// 选项卡滚动
$(".tab-list a").click(function(){
			var href = $(this).attr("href");
			var offsetTop = $(href).offset().top;
				console.log(offsetTop)
			$("html,body").animate({scrollTop:offsetTop},1000);
			return false;
		})

// numday滚动
$(".nlist a").click(function(){
			var href = $(this).attr("href");
			var offsetTop = $(href).offset().top;
				console.log(offsetTop)
			$("html,body").animate({scrollTop:offsetTop},1000);
			return false;
		})
// dian滚动
$(".ndian a").click(function(){
			var href = $(this).attr("href");
			var offsetTop = $(href).offset().top;
				console.log(offsetTop)
			$("html,body").animate({scrollTop:offsetTop},1000);
			return false;
		})
// numdayjs
$(".nlist a").click(function(){
	var ind = $(this).index()
	$(".ndian a").eq(ind).children().addClass("yuan").text("详情");
	$(".ndian a").eq(ind).siblings().children().removeClass("yuan").text("")
})
// dianjs
$(".ndian a").click(function(){
	$(this).children().addClass("yuan").text("详情");
	$(".ndian a").siblings().children().removeClass("yuan").text("");
})
// numday定位
$(window).scroll(function(){
			var stop = $(this).scrollTop();
			if(stop<1500){
				$(".nfix").css("display","none");
			}
			if (stop>5220){
				$(".nfix").css("display","none");
			}else if(stop>1500){
				$(".nfix").css("display","block");
			}
		});
// 选项卡定位
$(window).scroll(function(){
			var stop = $(this).scrollTop();
			if (stop>1300) {
				$(".tab-list").css("display","block");
			}else{
				$(".tab-list").css("display","none");
			}
		});