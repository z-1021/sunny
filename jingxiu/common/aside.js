//点击返回顶部
function refresh(){
	if($(window).width()>1200){
		$(".aside_online").show();
		$("#up").hide();
		$(".aside_title").click(function(){
			$(this).parent().animate({right:"0"},400)
			$(this).css("display","none")
		})
		$("#del").click(function(){
			$(this).parents(".aside_online").animate({right:"-145"},400,function(){
				$(".aside_title").css("display","block")
			})
		})
		$(".upSlide").click(function(){
			$('body,html').animate({scrollTop:0},500);
				return false;
		});
	}else{
		$(".aside_online").hide();
		$("#up").show();
		$(window).scroll(function(){
		var $scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;//鍏煎娴忚鍣�
			 if($scrollTop >350){
			    $("#up").show();
			    if($(window).width()>1200 ){
			    	$("#up").hide();
			    }
			}else{ $("#up").hide();};	
		});
			$("#up").click(function(){
			$('body,html').animate({scrollTop:0},500);
					return false;
				});
	}
}
$(document).ready(function(){
	refresh();
	$("#menu").click(function(){
		$("#hidden").slideToggle("slow");
	}); 
})
$(window).resize(function  () {
			$(".nav_1").hide();
			refresh();
})
$(window).resize(function  () {
			$(".hidden").hide();
			refresh();
})
