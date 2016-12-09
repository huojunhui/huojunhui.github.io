		var myBtn = document.getElementById("list2")
		var myDiv = document.getElementById("city_change")
		myBtn.onclick = function(){
			myDiv.style.display = "block";
		}
		document.body.onclick = functioncity
			e = e || window.event;
			var target = e.target || e.srcElement;
			if (target != myBtn) {
				myDiv.style.display = "none";
			}; 
		}
		$("#city_change li").click(function(){
			var text=$(this).text();
			$(".top-nav-2 #list-2").text(text)
		})
		$(".bgc-list-1").mouseenter(function(){
		$(this).attr("src","../images/imagelu/online-pay-topico1a.png")//gps变色
		})
		$(".bgc-list-1").mouseleave(function(){
			$(this).attr("src","../images/imagelu/nav-location.png")//gps再变回来
		})
		$(".bgc-list-4").mouseenter(function(){
			$(this).attr("src","../images/imagelu/online-pay-topico2a.png")//手机变色
		})
		$(".bgc-list-4").mouseleave(function(){
			$(this).attr("src","../images/imagelu/nav-phone.png")//手机变色回
		})