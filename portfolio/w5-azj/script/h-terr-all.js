$(".container .content .top .c-t-c .searchs a .seekImg").click(function(){
	var txt=$(".container .content .top .c-t-c .searchs .txt").val();
	if(txt==="南京"){
		$(this).parent().attr("href","../html/h-html-searchCity.html");
	}else if(txt==="温泉"){
		$(this).parent().attr("href","../html/h-html-otherSearch.html");
	}		
});
$(".container .content .mid .activity img").mouseenter(function(){
	$(this).addClass("active");
})
$(".container .content .mid .activity img").mouseleave(function(){
	$(this).removeClass("active");
})

$(".container .content .mid .list4 ul li").mouseenter(function(){

	$(this).children("a").addClass("active")
	$(this).siblings().children("a").removeClass("active");
});