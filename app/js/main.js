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

/* hover menu*/
$('.menu-sub').hover (
	function () {
		$(this).closest('.menu__item').find('.menu__title').addClass('active');
	},
	function () {
		$(this).closest('.menu__item').find('.menu__title').removeClass('active');
	}
);
$('.menu-sub2').hover (
	function () {
		$(this).closest('.menu-sub__item').children().addClass('active');
	},
	function () {
		$(this).closest('.menu-sub__item').children().removeClass('active');
	}
);



});
