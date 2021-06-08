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
	});
	$(document).ready(function(){
		$('#btn_submit').click(function(){
			// собираем данные с формы
			var user_name    = $('#name').val();
			var user_tel  = $('#tel').val();
			// отправляем данные
			$.ajax({
				url: "/app/check.php", // куда отправляем
				type: "post", // метод передачи
				dataType: "json", // тип передачи данных
				data: { // что отправляем
					"user_name":    user_name,
					"user_tel":   user_tel
				},
				// после получения ответа сервера
				success: function(data){
					$('.messages').html(data.result); // выводим ответ сервера
				}
			});
		});
	});
})(jQuery);