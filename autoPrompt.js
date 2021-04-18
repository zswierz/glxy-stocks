function showPrompt(prompt) {
	document.getElementById(prompt).style.marginBottom = "25px"
	setTimeout(marketPromptReverse, 7000)
	function marketPromptReverse() {
		document.getElementById(prompt).style.marginBottom = "-60px"
	}
}
function disablePrompt(prompt) {
	document.getElementById(prompt).style.visibility = "hidden"
}
function enablePrompt(prompt) {
	document.getElementById(prompt).style.visibility = "visible"
}


function marketCloseOpenReminders() {
	today = new Date()
	hoursAuto = today.getHours()
	minutesAuto = today.getMinutes()
    secondsAuto = today.getSeconds()
	
	if (hoursAuto == 15 && minutesAuto == 30 && secondsAuto == 0) {
		showPrompt('after30')
	}
	if (hoursAuto == 15 && minutesAuto == 45 && secondsAuto == 0) {
		//market extended in 15m
		showPrompt('after15')
	}
	if (hoursAuto == 15 && minutesAuto == 55 && secondsAuto == 0) {
		//market extended in 5m
		showPrompt('after5')
	}
	if (hoursAuto == 16 && minutesAuto == 0 && secondsAuto == 0) {
		showPrompt('after')
	} 
	if (hoursAuto == 17 && minutesAuto == 30 && secondsAuto == 0) {
		//market closes in 30m
		showPrompt('closed30')
	}
	if (hoursAuto == 17 && minutesAuto == 45 && secondsAuto == 0) {
		//market closes in 15m
		showPrompt('closed15')
	}
	if (hoursAuto == 17 && minutesAuto == 55 && secondsAuto == 0) {
		//market closes in 5m
		showPrompt('closed5')
	}
	if (hoursAuto == 18 && minutesAuto == 0 && secondsAuto == 0) {
		//market closes in 5m
		showPrompt('closed')
	}
	if (hoursAuto == 8 && minutesAuto == 30 && secondsAuto == 0) {
		showPrompt('pre30')
	}
	if (hoursAuto == 8 && minutesAuto == 45 && secondsAuto == 0) {
		showPrompt('pre15')
	}
	if (hoursAuto == 8 && minutesAuto == 55 && secondsAuto == 0) {
		showPrompt('pre5')
	}
	if (hoursAuto == 9 && minutesAuto == 0 && secondsAuto == 0) {
		showPrompt('pre')
	}
	if (hoursAuto == 9 && minutesAuto == 15 && secondsAuto == 0) {
		showPrompt('open15')
	}
	if (hoursAuto == 9 && minutesAuto == 25 && secondsAuto == 0) {
		showPrompt('open5')
	}
	if (hoursAuto == 9 && minutesAuto == 30 && secondsAuto == 0) {
		showPrompt('open')
	}
}