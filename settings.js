var settingsButton = null
var settingsMenu = null
var isSettingsMenuOpen = false


function settingsStart() {
	settingsButton = document.getElementById('settingsIcon')
	settingsMenu = document.getElementById('settings')
}

function toggleSettingsMenu() {
	if (isSettingsMenuOpen == false) {
		settingsButton.style.opacity = 0.8
		settingsMenu.style.opacity = 1
		
		isSettingsMenuOpen = true
	}
	else {
		settingsButton.style.opacity = 1
		settingsMenu.style.opacity = 0
		isSettingsMenuOpen = false
	}
}