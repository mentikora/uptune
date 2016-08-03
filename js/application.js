$(document).ready(function() {

	//menu switcher
	$('.menu_switch').on('click', function(){
		$(this).toggleClass('active');
		$('#mobile_menu').toggleClass('open');
	});

	// $('.header_cart').on('shown.bs.modal', function () {
	//   $('#myInput').focus()
	// })

});