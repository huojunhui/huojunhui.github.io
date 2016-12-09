// JavaScript Document

		function qq(f_id){
		for(i=1;i<=2;i++){
		   if(i==f_id){
			document.getElementById("f"+i).className="block"; //内容的样式
			document.getElementById("g"+i).className="c_"+i+" hover_bg"; //头部的样式
			//document.getElementById("uid_"+i).focus();
		   }
		   else
		   {
			document.getElementById("f"+i).className="none"; //内容不显示
			document.getElementById("g"+i).className="c_0"; //
		   }
		}
		}
		
		
		
		
	