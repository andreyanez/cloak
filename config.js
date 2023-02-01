const form = document.getElementById('userForm');
const userInput = document.getElementById('userInput');

form.addEventListener('submit', e => {
	e.preventDefault();
	setKeyword(userInput.value);
	notifyUser(userInput.value);
});

function notifyUser(value) {
	window.alert(`keyword is now ${value}`);
}

function setKeyword(value) {
	localStorage.setItem('keyword', value);
}
