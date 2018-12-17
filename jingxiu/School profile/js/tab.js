window.onload=function(){
var ul=document.getElementById("list");//获取ul
	var li=ul.getElementsByTagName("li"); //li数组
	var cont=document.getElementById("content")//content存放内容的大DIV
	var div=cont.getElementsByTagName("div");   //从content中获取div
	for(var i=0; i<li.length; i++){
		li[i].index=i;     //设置索引值
		li[i].onclick=function(){
			for(var j=0; j<li.length; j++){
				li[j].className="normal"; 
				div[j].style.display="none";
			}
			li[this.index].className="active";
			div[this.index].style.display="block";
		}	
	}

}

