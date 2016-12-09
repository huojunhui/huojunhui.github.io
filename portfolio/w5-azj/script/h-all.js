$(".container .content .mid .activity .imgBoxs img").mouseenter(function(){
	$(this).addClass("active");
})
$(".container .content .mid .activity .imgBoxs img").mouseleave(function(){
	$(this).removeClass("active");
})

$(".container .content .top .c-t-c .searchs a .seekImg").click(function(){
	var txt=$(".container .content .top .c-t-c .searchs .txt").val();
	if(txt==="南京"){
		$(this).parent().attr("href","../html/h-html-searchCity.html");
	}else if(txt==="温泉"){
		$(this).parent().attr("href","../html/h-html-otherSearch.html");
	}
	
});
$(".container .content .mid .activity .person .hand img").click(function(){
	var txt=Number($(this).next().text());
	if(txt===1){
		$(this).next().text(0);
		$(this).attr("src","../images/h-page/hand.jpg");
	}else{
		$(this).next().text(1);
		$(this).attr("src","../images/h-page/hand1.jpg");
	}
});

$(".container .content .mid .activity .person .eye img").mouseenter(function(){
	var txt=Number($(this).next().text());
	txt++;
	$(this).next().text(txt);
});
function fun(){
	if(localStorage.pagecount){
		localStorage.pagecount=Number(localStorage.pagecount)+1;
	}else{
		localStorage.pagecount=1;
	}
	var result=localStorage.pagecount
	$(this).children(".person").children(".eye").children("img").next().text(result);
}