$(document).ready(function() {

	$('.tabs__nav a').click(function(){
		if (!($(this).hasClass('is-active'))) $(this).addClass('is-active').siblings().removeClass('is-active')
			.parents().find('.tabs__content').eq($(this).index()).fadeIn(150).siblings('.tabs__content').hide();
		return false;
	});

	$(".js-member-login").click(function() {
		$(".popup-wrap").fadeIn();
		$(".popup").slideUp();
		$(".js-popup_entry").slideDown();
		return false;
	});

	$(".popup-wrap, .popup__close").click(function() {
		$(".popup").slideUp();
		$(".popup-wrap").fadeOut();
		return false;
	});

	$(".js-btn_reg").click(function() {
		$(".popup-wrap").fadeIn();
		$(".popup").slideUp();
		$(".js-popup_reg").slideDown();
		return false;
	});

	$(".js-user-block").click(function() {
		if($(this).hasClass('is-active')){
			$(this).removeClass('is-active');
			$('.user-block').slideUp();
		}
		else{
			$(this).addClass('is-active');
			$('.user-block').slideDown();
		}
		return false;
	});
});