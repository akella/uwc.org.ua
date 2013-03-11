$(document).ready(function() {

	$('.tabs__nav a').click(function(){
		if (!($(this).hasClass('is-active'))) $(this).addClass('is-active').siblings().removeClass('is-active')
			.parents().find('.tabs__content').eq($(this).index()).fadeIn(150).siblings('.tabs__content').hide();
		return false;
	});

});