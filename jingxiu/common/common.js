$(function(){
		
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
