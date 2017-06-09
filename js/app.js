$(document).ready(function(){
	$("a[rel^='prettyPhoto']").prettyPhoto({
		// theme: 'facebook',
		// slideshow: 5000, 
		// autoplay_slideshow:true
		social_tools: ''
	});

	// goto free trial
	$('a[href=#free-trial]').click(function(){
		$('html, body').animate({
			scrollTop: $('#section7').offset().top
		}, 700, function(){
			$('#big-input-email').focus();
		});
	});
});