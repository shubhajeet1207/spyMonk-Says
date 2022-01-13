console.log('Its working')

let theme = localStorage.getItem('theme')

if(theme == null){
	setTheme('light')
}else{
	setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')


for (var i=0; themeDots.length > i; i++){
	themeDots[i].addEventListener('click', function(){
		let mode = this.dataset.mode
		console.log('Option clicked:', mode)
		setTheme(mode)
	})
}

function setTheme(mode){
	if(mode == 'light'){
		document.getElementById('theme-style').href = static + '/blog/css/blue.css'
	}

	if(mode == 'blue'){
		document.getElementById('theme-style').href = static + '/blog/css/style.css'
	}

	if(mode == 'green'){
		document.getElementById('theme-style').href = static + '/blog/css/green.css'
	}

	if(mode == 'purple'){
		document.getElementById('theme-style').href = static + '/blog/css/purple.css'
	}

	localStorage.setItem('theme', mode)
}

var script = document.createElement('script');
script.type = 'text/javascript'
script.src = "https://cdn.tiny.cloud/1/1054g45up3jjvf5rd2kgaud1jecjjcx35yz8s8aw13mzhdgl/tinymce/5/tinymce.min.js";
    document.head.appendChild(script);