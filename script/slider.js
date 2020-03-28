$(document).ready(function () {
	$('.works-example-slider').slick({
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		dots: false,
		speed: 300,
		appendArrows: $('.list-holder'),
		prevArrow: '<i class="fa fa-angle-right  fa-rotate-180 slider-prev" aria-hidden="true"></i>',
		nextArrow: '<i class="fa fa-angle-right slider-next" aria-hidden="true"></i>',
		responsive: [
			{
				breakpoint: 1366,
				settings: {
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					arrows: false,

				}
			}
		]
	});

	$('.product-slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		dotsClass: 'custom-dots',
		speed: 300,

		appendArrows: $('.content__holder'),
		prevArrow: '<i class="fa fa-angle-right  fa-rotate-180 slider-prev" aria-hidden="true"></i>',
		nextArrow: '<i class="fa fa-angle-right slider-next" aria-hidden="true"></i>',
	});
});

