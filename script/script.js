window.onload = function () {
	document.querySelector('.js-header-burger').addEventListener('click', function () {
		document.querySelector('.nav__detailed-block_mobile').classList.toggle('nav__detailed-block_active');
		document.querySelector('.nav__bg').classList.toggle('nav__bg_active');
		
		if (document.querySelector('.nav__detailed-block_mobile.nav__detailed-block_active') && window.innerWidth <= 768)
			document.querySelector('body').style.position = "fixed";
		else 
			document.querySelector('body').style.position = "relative";
		
			window.onresize = function (e) {
				if (window.innerWidth > 768) {
					document.querySelector('body').style.position = "relative";
					document.querySelector('.nav__detailed-block_mobile').classList.remove('nav__detailed-block_active');
					document.querySelector('.nav__bg').classList.remove('nav__bg_active');
				}				
			}
			
	});
	
	document.querySelector('.js-nav-burger').addEventListener('click', function () {
		document.querySelector('.nav__detailed-block').classList.toggle('nav__detailed-block_active')
	});


		

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
	})()
};

