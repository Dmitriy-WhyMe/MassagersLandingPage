(function ($) {
	$(document).ready(function () {
		$('.slider-main').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 5000,
			arrows: false,
			dots: true,
  			infinite: true
		});
		jQuery(document).ready(function($) {
			$('#pop_1').magnificPopup({
				type: 'inline'
			});
		});
		jQuery(document).ready(function($) {
			$('#pop_2').magnificPopup({
				type: 'inline'
			});
		});
		jQuery(document).ready(function($) {
			$('#pop_3').magnificPopup({
				type: 'inline'
			});
		});
		$(document).ready(function () {
			$('#forms').submit(function () {
				var formID = $(this).attr('id'); // Получение ID формы
				var formNm = $('#' + formID);
				$.ajax({
					type: 'POST',
					url: '../app/check.php', // Обработчик формы отправки
					data: formNm.serialize(),
				});
				return false;
			});
		});
	});
})(jQuery);