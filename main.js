function updateView() {
	const keyword = localStorage.getItem('keyword');
	if (!keyword) return;
	console.log(keyword);
}

updateView();

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
