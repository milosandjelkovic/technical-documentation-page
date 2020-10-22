var menuItems = document.getElementsByClassName('nav-link');

for (var i = 0; i < menuItems.length; i++) {
	menuItems[i].addEventListener('click', function() {
		var current = document.getElementsByClassName('act');
		current[0].className = current[0].className.replace(' act', '');
		this.className += ' act';
	});
}
