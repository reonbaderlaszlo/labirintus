$(function(){

	$('.js-agreement').on('click', function  (e) {

		e.preventDefault();

		$('.agreement').fadeOut('fast', function() {

			$('.description').fadeIn('fast');
			
		});
		 
	});

	$('.js-description').on('click', function  (e) {

		e.preventDefault();

		$('.description').fadeOut('fast', function() {

			$('.game').fadeIn('fast');

			$('header .logo').addClass('game-fix');

			$('header nav').addClass('game-fix');

			$('.overlay').fadeIn('fast');

			$('.overlay').delay(5000).fadeOut('fast', function () {
				  
				$('.game').fadeOut('fast');

				$('header .logo').removeClass('game-fix');

				$('header nav').removeClass('game-fix');

				$('.success').fadeIn('fast');

			});
			
			
		});
		 
	});
    
});
