$(function() {

// Section design_mobile
	$(".tab_item").not(":first").hide();
	$(".tab_item_1").not(":first").hide();
	$(".tab_item_2").not(":first").hide();
	$(".tab, .tab1, .tab2").click(function() {
		$(".tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab1").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab2").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab_item").hide().eq($(this).index()).fadeIn()
		$(".tab_item_1").hide().eq($(this).index()).fadeIn()
		$(".tab_item_2").hide().eq($(this).index()).fadeIn()
	});


// Section packages
	$('.more').on('click', function(e) {
		e.preventDefault();

		if($(this).closest('.more').hasClass('hide_text')) {
			$('.more').removeClass('hide_text');
		} else {
			$('.more').removeClass('hide_text');
			$(this).closest('.more').addClass('hide_text');
		}

		var $content = $(this).prev();
		$content.slideToggle(500);
		$('.list_mobile').not($content).slideUp(500);

	});


});


