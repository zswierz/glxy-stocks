var apiKey = "pk_1aead1ec8dba4b6e85264464c4ae4f38"
var currentStock = ""
var dataSource = "realtime"
var marketStatus = null
var price = null
var lastPrice = null
var numRequests = 0

var currentPrice = 0

function checkPrice() {
   const xhttp = new XMLHttpRequest();
   const url = "https://cloud.iexapis.com/stable/stock/" + currentStock + "/quote?token=" + apiKey
   xhttp.open("GET", url);
   xhttp.send();
   xhttp.onreadystatechange = function () {
   	if (this.readyState == 4 && this.status == 200) {
		   	numRequests += 1
			cleanedAnswer = JSON.parse(xhttp.response)
			currentPrice = cleanedAnswer.iexRealtimePrice.toFixed(2)
			cleanedPrice = "$" + currentPrice
			changeDollar = cleanedAnswer.change
			changePercent = cleanedAnswer.changePercent
			if (Math.sign(changeDollar) == -1) {
				percentTimes = changePercent * 100
				readablePercent = percentTimes.toFixed(2) * -1
				finalText = changeDollar + " (" + readablePercent + "%)"
				changeSubText(finalText, 'red')
			 }
			 if (Math.sign(changeDollar) == 1) {
				percentTimes = changePercent * 100
				readablePercent = percentTimes.toFixed(2)
				finalText = "+" + changeDollar + " (" + readablePercent + "%)"
				changeSubText(finalText, 'green')
			 }
			if (numRequests == 1) {
				lastPrice = cleanedPrice
			}
			else {
				lastPrice = price
			}
			changeText(cleanedPrice)
			price = currentPrice
			changeVolume(cleanedAnswer.avgTotalVolume)
			changeMainColor()
		}
		if (this.status == 404) {
			console.log('invalid company')
		}
	}
}

function setCompany(ticker) {
	var doesCompanyExist = false
	const xhttp = new XMLHttpRequest();
	const url = "https://cloud.iexapis.com/stable/stock/" + ticker.toUpperCase() + "/quote?token=" + apiKey
	xhttp.open("GET", url);
	xhttp.send();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			doesCompanyExist = true
			useExistence()
		 }
		 if (this.status == 404) {
			doesCompanyExist = false
			useExistence()
		 }
	}
	function useExistence() {
		if (doesCompanyExist == true) {
			currentStock = ticker.toUpperCase()
			changeText("Connecting...")
			checkPrice()
		}
	}
}

function changeText(text) {
	var stockPrice = document.getElementsByClassName('stockPrice')
	for (var i = 0; i < stockPrice.length; i++) {
		stockPrice[i].innerHTML = text
	}
}

function makeReadableText(ticker) {
	var changeDollar = null
	var changePercent = null
	const xhttp = new XMLHttpRequest();
	const url = "https://cloud.iexapis.com/stable/stock/" + ticker + "/quote?token=" + apiKey
	xhttp.open("GET", url);
	xhttp.send();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			 cleanedAnswer = JSON.parse(xhttp.response)
			 changeDollar = cleanedAnswer.change
			 changePercent = cleanedAnswer.changePercent
			 if (Math.sign(changeDollar) == -1) {
				percentTimes = changePercent * 100
				readablePercent = percentTimes.toFixed(2) * -1
				finalText = changeDollar + " (" + readablePercent + "%)"
				changeSubText(finalText, 'red')
			 }
			 if (Math.sign(changeDollar) == 1) {
				percentTimes = changePercent * 100
				readablePercent = percentTimes.toFixed(2)
				finalText = "+" + changeDollar + " (" + readablePercent + "%)"
				changeSubText(finalText, 'green')
			 }
		}
 	}
}

function changeMainColor() {
	var glitch = document.getElementsByClassName('bgStockPrice')
	if (lastPrice < price) {
		for (var i = 0; i < glitch.length; i++) {
			glitch[i].style.color = "#00c805"
		}
	}
	if (lastPrice > price) {
		for (var i = 0; i < glitch.length; i++) {
			glitch[i].style.color = "#FF5000"
		}
	}
}