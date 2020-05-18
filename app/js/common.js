
$( document ).ready(function() {

	// ----------------- open/close nav on mobile-------------

	$('.header__nav-btn').on('click', function () {
		$('.header__nav-btn .nav-btn').toggleClass('active');
		$('.header__nav').toggleClass('active');
		$('body').toggleClass('locked');
	});

	// ----------------- change language -------------

	$('.language-btn').on('click', function(){
		$(this).next('.language').toggleClass('active');
	});

	// ----------------- open/close popup-------------

	$('.section-2__head-btn').on('click', function(e){
		e.preventDefault();
		$('.popup-wrap').addClass('active');
		$('.popup-close').removeClass('active');
	});
	$('.popup-close').on('click', function(e){
		$('.popup-wrap').removeClass('active');
	});

	// -------------------- initialize slider on mobile --------------------

	$('.section-2__slider').slick({
		arrows: false,
		infinite: false,
		mobileFirst: true,
		dots: true,
    responsive: [
			{
				breakpoint: 767,
				settings: 'unslick'
			}
    ]
	});

	$('.section-5__slider').slick({
		arrows: false,
		infinite: false,
		mobileFirst: true,
		slidesToShow: 1,
		variableWidth: true,
    responsive: [
			{
				breakpoint: 767,
				settings: 'unslick'
			}
    ]
	});

	$('.detail__slider').slick({
		arrows: true,
		infinite: false,
		slidesToShow: 3,
		prevArrow: $('.detail__slider-prev'),
		nextArrow: $('.detail__slider-next'),
		// mobileFirst: true,
    responsive: [
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
				}
			},
    ]
	});

});