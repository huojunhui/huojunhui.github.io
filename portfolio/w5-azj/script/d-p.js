$(".list li").mouseenter(function(){
	$(this).addClass("cb-active")
})
$(".list li").mouseleave(function(){
	$(this).removeClass("cb-active")
})
// zidong
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