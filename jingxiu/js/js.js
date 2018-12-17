$(function(){
	$('.bxslider').bxSlider({
		auto: true,
		mode: 'fade',
		captions: true
		});
		
		$("#menu").click(function(){
			$("#hidden").slideToggle("slow");
		}); 
		$('#goToTop').hide(); //隐藏go to top按钮

		$(window).scroll(function() {
			if($(this).scrollTop() > 300) {
				$('#goToTop').fadeIn();
			} else {
				$('#goToTop').fadeOut();
			}
		});

		$('#goToTop').click(function() {
			$('html ,body').animate({
				scrollTop: 0
			}, 600);
			return false;
		});
});

var button=document.getElementById("button");//按钮
  	button.onclick=function(){
      if(button.innerHTML=="查看更多 +"){
      	$(".overflow").css("display","block");
      	button.innerHTML="关闭  ×";
      }else{
      	$(".overflow").css("display","none");
      	button.innerHTML="查看更多 +";
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