$(".list a").click(function(){
	$(this).children().addClass("cb-active")
	$(this).siblings().children().removeClass("cb-active")
})
   //城市切换
var myBtn = document.getElementById("list2")
var myDiv = document.getElementById("city_change")
myBtn.onclick = function(){
	myDiv.style.display = "block";
}
document.body.onclick = function(e){
	e = e || window.event;
	var target = e.target || e.srcElement;
	if (target != myBtn) {
		myDiv.style.display = "none";
	}; 
}
$("#city_change li").click(function(){
	var text=$(this).text();
	$(".list01 .list1").text(text)
})

