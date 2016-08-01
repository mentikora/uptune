$(document).ready(function() {

	//menu switcher
	$('.menu_switch').on('click', function(){
		$(this).toggleClass('active');
		$('#mobile_menu').toggleClass('open');
	});

});