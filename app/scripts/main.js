window.onload = (function () {

	var app = {

		initialize : function () {
			console.log('Инициализация приложения');

			this.setUpListeners();
		},

		// Подключаем прослушку событий
		setUpListeners: function () {
			console.log('Прослушка событий включена');

			$(window).on( 'scroll', app.scrollTopWindow); // проверяем на скролл окна вниз
		},
	}

	app.initialize();
})();