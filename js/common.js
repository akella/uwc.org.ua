$(document).ready(function() {
	// function element exists
	jQuery.fn.exists = function() {
		return $(this).length;
	}

	// social-float
	if ($('.social-float').exists()){
		$(window).scroll(function(){
			if ($(window).scrollTop() > 123) {
				$('.social-float').css({'position':'fixed','top':'77px'});
			}
			else{
				$('.social-float').css({'position':'absolute','top':'200px'});
			}
		});
	}
});