$(function() {
	/*carousel index*/
	$('.js-carousel').slick({
		infinite: true,
		fade: true,
		arrows: false,
		autoplay: true,
	  autoplaySpeed: 3000,
		dots: true,
	});

	/* brand-index carousel */

	$('.js-brand').slick({
		arrows: false,
		slidesToShow: 6,
	  slidesToScroll: 1,
		infinite: true,
		autoplay: true,
	  autoplaySpeed: 2000,
	});



});
