const keyword = 'trash';

// Alternative to DOMContentLoaded event
document.onreadystatechange = () => {
	if (document.readyState === 'complete') {
		setInterval(() => {
			const content = document.getElementsByTagName('span');
			for (let index = 0; index < content.length; index++) {
				const element = content[index];
				if (element.innerText === keyword) element.innerText = 'covered';
			}
		}, 1000);
	}
};

// COULD IMPLEMENT THE FUNCTION ON SCROLL RATHEN THAN IN AN INTERVAL

// cloaked
