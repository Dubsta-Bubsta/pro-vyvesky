window.onload = function () {
	document.querySelector('.js-header-burger').addEventListener('click', function () {
		document.querySelector('.nav__detailed-block_mobile').classList.toggle('nav__detailed-block_active');
		document.querySelector('.nav__bg').classList.toggle('nav__bg_active');
	});
	
	document.querySelector('.js-nav-burger').addEventListener('click', function () {
		document.querySelector('.nav__detailed-block').classList.toggle('nav__detailed-block_active')
	});


		
	// Desktop nav list
	(function () {
		let navHeadersList = document.querySelectorAll('.js-nav-header');
		let navListsList = document.querySelectorAll('.js-nav-list');
		let listIndex = 0;
		navHeadersList.forEach(function (item, index) {
			item.addEventListener('click', (e) => {
				listIndex = index;
				navListsList.forEach((element, index) => {
					if (listIndex === index)
						element.classList.add('variants-list_active');
					else
						element.classList.remove('variants-list_active');
				})
			})
		});
	})();

	// Mobile nav list
	(function () {
		let navHeadersList = document.querySelectorAll('.js-mobile-nav-header');
		let navListsList = document.querySelectorAll('.js-mobile-nav-list');
		let listIndex = 0;
		navHeadersList.forEach(function (item, index) {
			item.addEventListener('click', (e) => {
				listIndex = index;

				navListsList.forEach((element, index) => {
					let currentHeader = navHeadersList[index];
					if (listIndex === index) {
						currentHeader.classList.toggle('details__header_active')
						element.classList.toggle('variants-list_active');
					} else {
						element.classList.remove('variants-list_active');
						currentHeader.classList.remove('details__header_active');
					}
						
				})
			})
		});
	})();
};

