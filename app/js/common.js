
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

});