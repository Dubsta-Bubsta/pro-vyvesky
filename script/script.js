window.onload = function () {
	document.querySelector('.js-header-burger').addEventListener('click', function () {

		document.querySelector('.nav__detailed-block_mobile').classList.toggle('nav__detailed-block_active');
		document.querySelector('.nav__bg').classList.toggle('nav__bg_active');
	});

	document.querySelector('.js-nav-burger').addEventListener('click', function () {
		// Removing active class on hovered dropdown
		document.querySelector('.nav__detailed-block_desktop').classList.remove('nav__detailed-block_hover-active')		
		document.querySelectorAll('.js-nav-main-link').forEach((item) => { item.classList.remove('list__element_active') })
		document.querySelectorAll('.js-nav-list').forEach((item) => { item.classList.remove('variants-list_active') })
		

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

	(function () {
		let mainLinks = document.querySelectorAll('.js-nav-main-link'); 	// visible links in nav
		let hoveredLists = document.querySelectorAll('.js-nav-list')	// lists in dropdown
		mainLinks.forEach((item, index) => {
			item.addEventListener('mouseover', () => {
				document.querySelector('.nav__detailed-block_desktop').classList.add('nav__detailed-block_hover-active')
				// Reset active for all elements
				hoveredLists.forEach((item) => { item.classList.remove('variants-list_active') })
				mainLinks.forEach((item) => { item.classList.remove('list__element_active') })
				document.querySelector('.nav__detailed-block_desktop').classList.remove('nav__detailed-block_active')

				if (!hoveredLists[index].className.includes('variants-list_active')) {
					hoveredLists[index].classList.add('variants-list_active')
					mainLinks[index].classList.add('list__element_active')
				}
			})
			document.querySelector('nav').addEventListener('mouseleave', () => {
				// If not burger dropdown
				if (!document.querySelector('nav__detailed-block_active')) {
					mainLinks.forEach((item) => { item.classList.remove('list__element_active') })
					hoveredLists.forEach((item) => { item.classList.remove('variants-list_active') })
					document.querySelector('.nav__detailed-block_desktop').classList.remove('nav__detailed-block_hover-active')
				}

			})
		})
	})()
};

