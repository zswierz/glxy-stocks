var marketStatus = "open"
var hours = null
var minutes = null
var today = null
var showedClosedPrompt = 0
var showedPrePrompt = 0
var dayNameRead = null
var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var today = new Date()


function getMarketStatus() {
	today = new Date()
	hours = today.getHours()
	minutes = today.getMinutes()
	if (hours <= 16) {
		if (hours >= 16) {
			marketStatus = "after"
		}
		else {
			marketStatus = "open"
		}
	}
	if (hours < 10) {
		if (hours >= 9 && minutes >= 30) {
			marketStatus = "open"
		}
		else if (hours == 9) {
			marketStatus = "pre"
		}
		else {
			marketStatus = "closed"
		}
	}
	if (hours >= 16) {
		if (hours >= 16) {
			marketStatus = "after"
		}
		if (hours >= 18) {
			marketStatus = "closed"
		}
	}
	if (today.getDay() == 0 || today.getDay() == 6) {
		marketStatus = "closed"
	}
	return marketStatus
}

function changeMarketStatus() {
	getMarketStatus()
	if (marketStatus == "open") {
		document.getElementById('updatedMarketStatus').innerHTML = "Open"
	}
	if (marketStatus == "pre") {
		document.getElementById('updatedMarketStatus').innerHTML = "Pre Market"
		document.getElementById('glitchTxt1').style.visibility = "visible"
		document.getElementById('glitchTxt2').style.visibility = "visible"
	}
	if (marketStatus == "after") {
		document.getElementById('updatedMarketStatus').innerHTML = "After Hours"
	}
	if (marketStatus == "closed") {
		document.getElementById('updatedMarketStatus').innerHTML = "Closed"
		document.getElementById('glitchTxt1').style.visibility = "hidden"
		document.getElementById('glitchTxt2').style.visibility = "hidden"
	}
}

var checkTimeOpen = null

function changeInterval() {
	getMarketStatus()
	if (marketStatus == "open") {
		window.clearTimeout(checkTimeOpen)
		checkTimeOpen = setTimeout(runCheckTimeOpen, 1000)
		function runCheckTimeOpen() {
			checkPrice()
		}
	}
	if (marketStatus == "pre" || marketStatus == "after") {
		window.clearTimeout(checkTimeOpen)
		checkTimeOpen = setTimeout(runCheckTimeOpen, 7000)
		function runCheckTimeOpen() {
			checkPrice()
		}
	}
	if (marketStatus == "closed") {
	}
}

function onLoadCheckStatus() {
	setTimeout(function() {
		if (marketStatus == "pre") {
			showPrompt('pre')
		}
		else if (marketStatus == "after") {
			showPrompt('after')
		}
		else if (marketStatus == "closed") {
			showPrompt('closed')
		}
	}, 2000)
}

// function makeReadableDate() {
// 	var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
// 	var d = new Date()
// 	var dayName = days[d.getDay()]
// 	dayNameRead = dayName
// }