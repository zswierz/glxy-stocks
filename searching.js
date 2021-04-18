searchedStockName = null
removeRslt = null

apiKey = "pk_1aead1ec8dba4b6e85264464c4ae4f38"

function createListeners() {
    var stockPrice = document.getElementsByClassName('stockPrice')
    var searchResult = document.getElementById('searchResult')
    var searchResultStck = document.getElementById('searchResultStock')
	 var searchResultName = document.getElementById('searchResultName')
	document.getElementById('searchBox').addEventListener("keyup", function (e) {
		if (event.which === 13 && document.activeElement == document.getElementById('searchBox')) {
            for (var i = 0; i < stockPrice.length; i++) {
				searchResult.style.opacity = 0
            	setCompany(document.getElementById('searchBox').value.toUpperCase())
            }
        }
		else {
		  window.clearTimeout(removeRslt)
		  removeRslt = setTimeout(removeResult, 3000)
		  searchResult.style.opacity = 1
          searchResultStck.innerHTML = document.getElementById('searchBox').value.toUpperCase()
		  searchStock(searchResultStck.innerHTML)
		  setTimeout(changeStockName, 100)
		  function changeStockName() {
		  		searchResultName.innerHTML = searchedStockName
		}
        function removeResult() {
        		searchResult.style.opacity = 0
        }
	}
	})
}

function searchStock(ticker) {
	const xhttp = new XMLHttpRequest();
   const url = "https://cloud.iexapis.com/stable/stock/" + ticker + "/quote?token=" + apiKey
   xhttp.open("GET", url);
   xhttp.send();
   xhttp.onreadystatechange = function () {
   	if (this.readyState == 4 && this.status == 200) {
			cleanedAnswer = JSON.parse(xhttp.response)
			searchedStockName = cleanedAnswer.companyName
		}
		if (this.status == 404) {
			searchedStockName = "Invalid Company"
		}
	}
}