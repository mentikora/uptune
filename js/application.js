$(document).ready(function() {

	//menu switcher
	$('.menu_switch').on('click', function(){
		$(this).toggleClass('active');
		$('#mobile_menu').toggleClass('open');
	});

	//search
	$('.header_search').on('click', function(){
		$('#search').fadeIn(200);
	});
	$('.close_search .icon-delete-button').on('click', function(){
		$('#search').fadeOut(200);
	});

});