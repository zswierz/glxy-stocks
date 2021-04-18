function startWeb() { 
	setElements()
	getElements()
	doCookieCheck()	
	settingsStart()
	getMarketStatus()
	// makeReadableDate()
	setInterval(changeMarketStatus, 2000)
	setInterval(changeInterval, 2000)
	createListeners()
	setInterval(marketCloseOpenReminders, 1000)
	onLoadCheckStatus()
	changeSwitchOnLoad()
}