import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

createApp(App).mount('#app');

// const form = document.getElementById('userForm');
// const userInput = document.getElementById('userInput');

// form.addEventListener('submit', e => {
// 	e.preventDefault();
// 	setKeyword(userInput.value);
// 	notifyUser(userInput.value);
// });

// function notifyUser(value) {
// 	window.alert(`keyword is now ${value}`);
// }

// function setKeyword(value) {
// 	localStorage.setItem('keyword', value);
// }

// function updateView() {
// 	const keyword = localStorage.getItem('keyword');
// 	if (!keyword) return;
// 	console.log(keyword);
// }

// updateView();

// 	setInterval(() => {
// 		const content = document.getElementsByTagName('span');
// 		for (let index = 0; index < content.length; index++) {
// 			const element = content[index];
// 			if (element.innerText === value) element.innerText = 'covered';
// 		}
// 	}, 1000);

// document.onreadystatechange = () => {
// 	if (document.readyState === 'complete') {
// 	}
// };

// COULD IMPLEMENT THE FUNCTION ON SCROLL RATHEN THAN IN AN INTERVAL
