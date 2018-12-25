$(function(){
	$('.bxslider').bxSlider({
		auto: true,
		mode: 'fade',
		captions: true
	});
	var buttons=document.getElementById("buttons");//按钮
  	buttons.onclick=function(){
      if(buttons.innerHTML=="查看更多 +"){
      	$(".overflow").css("display","block");
      	buttons.innerHTML="关闭  ×";
      }else{
      	$(".overflow").css("display","none");
      	buttons.innerHTML="查看更多 +";
      }
  }
  
var btn=document.getElementById("btn");//按钮
  	btn.onclick=function(){
      if(btn.innerHTML=="查看更多 +"){
      	$(".over").css("display","block");
      	btn.innerHTML="关闭  ×";
      }else{
      	$(".over").css("display","none");
      	btn.innerHTML="查看更多 +";
      }
  }
  
var more=document.getElementById("more");//按钮
  	more.onclick=function(){
      if(more.innerHTML=="查看更多 +"){
      	$(".over1").css("display","block");
      	more.innerHTML="关闭  ×";
      }else{
      	$(".over1").css("display","none");
      	more.innerHTML="查看更多 +";
      }
  }
  
var more1=document.getElementById("more1");//按钮
    more1.onclick=function(){
      if(more1.innerHTML=="查看更多 +"){
      	$(".over2").css("display","block");
      	more1.innerHTML="关闭  ×";
      }else{
      	$(".over2").css("display","none");
      	more1.innerHTML="查看更多 +";
      }
  }
});

