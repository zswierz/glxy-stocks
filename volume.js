var isVolumeVisible = true

function changeSwitchOnLoad() {
    var toggle = document.getElementById('volumeToggle')
    toggle.style.left = "75%"
    toggle.style.transform = "translate(-25%, -50%)"
}

function toggleVolume() {
    var toggle = document.getElementById('volumeToggle')
    if (isVolumeVisible == true) {
        document.getElementById('totalVolume').style.marginRight = "-300px"
        toggle.style.left = "25%"
        toggle.style.transform = "translate(-75%, -50%)"
        isVolumeVisible = false
    }
    else if (isVolumeVisible == false) {
        document.getElementById('totalVolume').style.marginRight = "20px"
        toggle.style.left = "75%"
        toggle.style.transform = "translate(-25%, -50%)"
        isVolumeVisible = true
    }
}

function changeVolume(volume) {
    nfObject = new Intl.NumberFormat('en-US')
    volumeFormatted = nfObject.format(volume)
    document.getElementById('updatedVolume').innerHTML = volumeFormatted
}