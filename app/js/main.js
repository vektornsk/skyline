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
		responsive: [
    {
      breakpoint: 1230,
      settings: {
        slidesToShow: 5,
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
				autoplay: false
      }
    }
	]
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

/* tab */
$('ul.tab').on('click', 'li:not(.active)', function() {
	console.log($(this).index());
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.tabs').find('.tab__content').removeClass('active').eq($(this).index()).addClass('active');
  });

/*resize login*/
$('.login-reset span').on('click', function () {
	$('.form-login').toggle();
	$('.form-login-reset').toggle();
	if ($('.login-reset span').text() == 'Забыли пароль?') {
		$('.login-reset span').text('Назад');
	} else {
			$('.login-reset span').text('Забыли пароль?');
	}
});

/*popup-menu*/

$('.lk').on('click', function(){
	$('.bg-layout').show();
	$('.popup-login').show(300);
});

$('.cart-info').on('click', function(){
	$('.bg-layout').show();
	$('.popup-cart').show(300);
});

$('.bg-layout').on('click', function(){
	$('.popup-login').hide(300);
	$('.popup-cart').hide(300);
	$('.menu-wrap').hide(300);
	$('.bg-layout').hide();
});
$('.btn-close-popup').on('click', function(){
	$('.popup-login').hide(300);
	$('.popup-cart').hide(300);
	$('.menu-wrap').hide(300);
	$('.bg-layout').hide();
});

/* menu mobil*/
$('.m-burger').on('click', function(){
	$('.bg-layout').show();
	$('.menu-wrap').show(300);
});

/*mobil search*/
$('.m-search').on('click', function(){
	$('.search-wrap').show(300);
});

/* MAP */

if ($('#map').length){
	var myMap;
	ymaps.ready(function () {
        myMap = new ymaps.Map("map", {
            center: [55.0231,82.9406],
            zoom: 17
        });
				var myPlacemark = new ymaps.Placemark(
				// Координаты метки
				[55.0231,82.9406]
				);
				// Добавление метки на карту
			myMap.geoObjects.add(myPlacemark);
			});
}

});
