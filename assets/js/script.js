$(document).ready(function () {


	var toggleAffix = function (affixElement, scrollElement, wrapper) {

		var height = affixElement.outerHeight(),
			top = wrapper.offset().top;

		if (scrollElement.scrollTop() >= top) {
			wrapper.height(height);
			affixElement.addClass("affix");
		}
		else {
			affixElement.removeClass("affix");
			wrapper.height('auto');
		}

	};


	$('[data-toggle="affix"]').each(function () {
		var ele = $(this),
			wrapper = $('<div></div>');

		ele.before(wrapper);
		$(window).on('scroll resize', function () {
			toggleAffix(ele, $(this), wrapper);
		});

		// init
		toggleAffix(ele, $(window), wrapper);
	});


	$(".navbar .dropdown-menu").mouseleave(function () {
		setTimeout(function () {

			$(this).removeClass("show");
		}, 3000); // delay the removal of the 'show' class for 3 seconds
	});


	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0, 2] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function (item) {
				return item.el.attr('title');
			}
		}
	});

	$('.popup-link').magnificPopup({
		// Delay in milliseconds before popup is removed
		removalDelay: 300,

		// Class that is added to popup wrapper and background
		// make it unique to apply your CSS animations just to this exact popup
		mainClass: 'mfp-fade'
	});

	// Initialize popup as usual
	$('.image-link').magnificPopup({
		type: 'image',
		mainClass: 'mfp-with-zoom', // this class is for CSS animation below

		zoom: {
			enabled: true, // By default it's false, so don't forget to enable it

			duration: 900, // duration of the effect, in milliseconds
			easing: 'ease-in-out', // CSS transition easing function

			// The "opener" function should return the element from which popup will be zoomed in
			// and to which popup will be scaled down
			// By defailt it looks for an image tag:
			opener: function (openerElement) {
				// openerElement is the element on which popup was initialized, in this case its <a> tag
				// you don't need to add "opener" option if this code matches your needs, it's defailt one.
				return openerElement.is('img') ? openerElement : openerElement.find('img');
			}
		}

	});

	var quantity = 0;

	$('.quantity-right-plus').click(function (e) {
		e.preventDefault();
		// Get the field name
		var quantity = parseInt($('#quantity').val());

		// Stop acting like a button
		$(".quantity-left-minus").removeAttr('disabled');
		if (quantity >= 9) {
			$(".quantity-right-plus").prop("disabled", true);

		}
		$('#quantity').val(quantity + 1);

		// Increment
	});

	$('.quantity-left-minus').click(function (e) {
		// Stop acting like a button
		e.preventDefault();


		// Get the field name
		var quantity = parseInt($('#quantity').val());
		if (quantity == 0) {
			$(".quantity-left-minus").prop("disabled", true);

		}
		$(".quantity-right-plus").removeAttr('disabled');
		// If is not undefined

		// Increment
		if (quantity > 0) {
			$('#quantity').val(quantity - 1);
		}
	});



});


