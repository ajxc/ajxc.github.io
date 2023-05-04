function selectTheme(e) {
	var sel = e.target;
	for (let i = 0; i < document.styleSheets.length; i++) {
		document.styleSheets[i].disabled = i != sel.value;
	}
}

function loadSelectorThemes() {
	var sel = document.getElementById('selector-themes');
	for (let i = 0; i < document.styleSheets.length; i++) {
		let opt = document.createElement('option');
		opt.value = i;
		opt.innerText = document.styleSheets[i].title;
		sel.appendChild(opt);

		if (!document.styleSheets[i].disabled) {
			sel.value = i;
		}
	}
}

function main() {
	/*
	https://developer.mozilla.org/en-US/docs/Web/CSS/Alternative_style_sheets
	unsupported in Chrome
	*/
	loadSelectorThemes();
	document.getElementById('selector-themes').addEventListener('change', selectTheme);
}

window.addEventListener('load', main);
