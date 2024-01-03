const OpensAccordion = (element1) => (element2) => (title) => (description)=> {
    const backgroundIcon =  document.getElementById(element1)
    const content = document.getElementById(element2)

    if (content.style.height != 'auto') {
        ClosesAccordion(title)(description) // prevents from having multiples 'boxes' opened

        backgroundIcon.style.background = 'url(./assets/images/icon-minus.svg) no-repeat'
        backgroundIcon.style.backgroundPositionY = 'center'
        backgroundIcon.style.backgroundPositionX = '95%'

        content.style.height = 'auto'
    } else {
        backgroundIcon.style.background = 'url(./assets/images/icon-plus.svg) no-repeat'
        backgroundIcon.style.backgroundPositionY = 'center'
        backgroundIcon.style.backgroundPositionX = '95%'

        content.style.height = '0'
    }

}

const ClosesAccordion = (element) => (element2) => {
    const titles =  document.getElementsByClassName(element)
    const descriptions = document.getElementsByClassName(element2)

    for (i = 0; i < titles.length; i ++) {
        titles[i].style.background = 'url(./assets/images/icon-plus.svg) no-repeat'
        titles[i].style.backgroundPositionY = 'center'
        titles[i].style.backgroundPositionX = '95%'

        descriptions[i].style.height = '0'
    }

}