var subtext = null

function setElements() {
    subtext = document.getElementById('priceDifference')
}

function changeSubText(text, color) {
    console.log(text)
    subtext.innerHTML = text
    changeColor(color)
}

function changeColor(color) {
    if (color == 'green') {
        subtext.style.color = '#00c805'
    }
    if (color == 'red') {
        subtext.style.color = '#FF5000'
    }
}