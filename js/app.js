$(document).ready(function(){
	$("a[rel^='prettyPhoto']").prettyPhoto({
		// theme: 'facebook',
		// slideshow: 5000, 
		// autoplay_slideshow:true
		social_tools: ''
	});

	// goto free trial
	$("a[href='#free-trial']").click(function(){
		$('html, body').animate({
			scrollTop: $('#section7').offset().top
		}, 700, function(){
			$('#big-input-email').focus();
		});
	});

	// sharer url
	var currentUrl = $(location).attr('href');
	if ($('.post-share-box a.bg-facebook').length > 0) {
		var urlShareFb = 'https://www.facebook.com/sharer/sharer.php?u='+ encodeURIComponent(currentUrl);
		$('.post-share-box a.bg-facebook').attr('href', urlShareFb);
	}
	if ($('.post-share-box a.bg-google').length > 0) {
		var urlShareGplus = 'https://plus.google.com/share?url='+ encodeURIComponent(currentUrl);
		$('.post-share-box a.bg-google').attr('href', urlShareGplus);
	}
	if ($('.post-share-box a.bg-twitter').length > 0) {
		var urlShareTwitter = 'http://twitter.com/share?url='+ encodeURIComponent(currentUrl) +'&text='+ $('head title').text();
		$('.post-share-box a.bg-twitter').attr('href', urlShareTwitter);
	}
	$('.post-share-box a').click(function(){
		PopupCenter(this.href, 'Share', 600, 400);
		return false;
	});

	// footer and link akakom
	$('#footer').find('.footer-pane .container.clearfix')
	.addClass('text-center')
	.prepend('<span>Muhammad Fahrur Rifai / 165410011 / <a href="http://www.akakom.ac.id" rel="nofollow" target="_blank">AKAKOM</a></span>');

});

function PopupCenter(url, title, w, h) {
	// Fixes dual-screen position                         Most browsers      Firefox
	var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
	var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;

	var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
	var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

	var left = ((width / 2) - (w / 2)) + dualScreenLeft;
	var top = ((height / 2) - (h / 2)) + dualScreenTop;
	var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

	// Puts focus on the newWindow
	if (window.focus) {
		newWindow.focus();
	}
}