var currentMode = 0
var cookieState = 0
var toggle = null
var dark = null
var darkR = null
var darkTxt = null
var darkTxtR = null
var darkTxtNB = null
var darkB = null


function getElements() {
	dark = document.getElementsByClassName('darkMode')
	darkR = document.getElementsByClassName('darkModeReverse')
	darkB = document.getElementsByClassName('darkModeBorder')
	darkTxt = document.getElementsByClassName('darkModeText')
	darkTxtR = document.getElementsByClassName('darkModeTextReverse')
	darkTxtNB = document.getElementsByClassName('darkModeTextNB')
	searchImg = document.getElementById('searchImg')
	toggle = document.getElementById('darkModeToggle')
}

function createCookieD() {
    document.cookie = "display_state=" + currentMode + "; expires= Mon, 20 Apr 2050 04:20:00 UTC;"
}

function getCookieD(name) {
   var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
	if (v == null) {
		cookieState = 0
	}
	else {
		cookieState = parseInt(v[2])
	}
}

function getCurrentMode() {
    if (currentMode == 0) {
        return "light"
    }
    if (currentMode == 1) {
        return "dark"
    }
}

function toggleMode() {
	if (currentMode == 0) {
		for (var i = 0; i < dark.length; i++) {
  			dark[i].style.backgroundColor = 'black'
			dark[i].style.color = 'black'
		}
		for (var i = 0; i < darkR.length; i++) {
  			darkR[i].style.backgroundColor = 'white'
			darkR[i].style.color = 'white'
		}
		for (var i = 0; i < darkB.length; i++) {
  			darkB[i].style.borderColor = 'black'
		}
		for (var i = 0; i < darkTxt.length; i++) {
  			darkTxt[i].style.color = 'black'
			darkTxt[i].style.backgroundColor = 'white'
		}
		for (var i = 0; i < darkTxtNB.length; i++) {
			darkTxtNB[i].style.color = 'black'
	  	}
		for (var i = 0; i < darkTxtR.length; i++) {
			darkTxtR[i].style.color = 'white'
	  	}
		toggle.style.left = "75%"
		toggle.style.transform = "translate(-25%, -50%)"
		searchImg.src = "search-dark.png"
		currentMode = 1
		createCookieD()
	}
	else if (currentMode == 1) {
		for (var i = 0; i < dark.length; i++) {
			dark[i].style.backgroundColor = 'white'
			dark[i].style.color = 'white'
		}
		for (var i = 0; i < darkR.length; i++) {
  			darkR[i].style.backgroundColor = '#0c0c0d'
			darkR[i].style.color = '#0c0c0d'
		}
		for (var i = 0; i < darkB.length; i++) {
  			darkB[i].style.borderColor = 'white'
		}
		for (var i = 0; i < darkTxt.length; i++) {
  			darkTxt[i].style.color = 'white'
		    darkTxt[i].style.backgroundColor = 'black'
		}
		for (var i = 0; i < darkTxtNB.length; i++) {
			darkTxtNB[i].style.color = 'white'
	  	}
		for (var i = 0; i < darkTxtR.length; i++) {
			darkTxtR[i].style.color = 'black'
	  	}
		toggle.style.left = "25%"
		toggle.style.transform = "translate(-75%, -50%)"
		searchImg.src = "search.png"
		currentMode = 0
		createCookieD()
	}
}

function doCookieCheck() {
	getCookieD('display_state')
	console.log(cookieState)
	if (cookieState == 0) {
		for (var i = 0; i < dark.length; i++) {
			dark[i].style.backgroundColor = 'white'
			dark[i].style.color = 'white'
		}
		for (var i = 0; i < darkR.length; i++) {
  			darkR[i].style.backgroundColor = '#0c0c0d'
			darkR[i].style.color = '#0c0c0d'
		}
		for (var i = 0; i < darkTxt.length; i++) {
  			darkTxt[i].style.color = 'white'
			darkTxt[i].style.backgroundColor = 'black'
		}
		for (var i = 0; i < darkTxtNB.length; i++) {
			darkTxtNB[i].style.color = 'white'
	  	}
		for (var i = 0; i < darkTxtR.length; i++) {
			darkTxtR[i].style.color = 'black'
	  	}
		for (var i = 0; i < darkB.length; i++) {
  			darkB[i].style.borderColor = 'white'
		}
	}
	else if (cookieState == 1) {
		toggleMode()
	}
}