$(function() {


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


	$('.more').on('click', function(e) {
		e.preventDefault();

		if($(this).closest('.more').hasClass('more_text')) {
			$('.more').removeClass('more_text');
		} else {
			$('.more').removeClass('more_text');
			$(this).closest('.more').addClass('more_text');
		}

		var $content = $(this).prev();
		$content.slideToggle(500);
		$('.active_mob').not($content).slideUp('slow');

	});


});


