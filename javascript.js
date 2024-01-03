const OpensAccordion = (element1) => (element2) => {
    const backgroundIcon =  document.getElementById(element1)
    const content = document.getElementById(element2)

    if (content.style.height != 'auto') {
        backgroundIcon.style.background = 'url(./assets/images/icon-minus.svg) no-repeat'
        backgroundIcon.style.backgroundPositionY = 'center'
        backgroundIcon.style.backgroundPositionX = '95%'

        content.style.height = 'auto'
    } else {
        backgroundIcon.style.background = 'url(./assets/images/icon-plus.svg) no-repeat'
        backgroundIcon.style.backgroundPositionY = 'center'
        backgroundIcon.style.backgroundPositionX = '95%'
        
        content.style.height = 0
    }
}
