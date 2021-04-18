window.onerror = function(msg, url, linenumber) {
    alert('Error message: '+msg+'\nLine Number: '+linenumber+'\nURL: '+url)
    return true
}