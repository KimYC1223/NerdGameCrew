let images = document.getElementsByClassName('ImageDiv')
let CurrentIndex = 0;
let LeftButtons = document.getElementsByClassName('fa-angle-left')
let rightButtons = document.getElementsByClassName('fa-angle-right')
let backButton = document.getElementById('backButton')
let menuButton = document.getElementById('menuButton')
let menuDiv = document.getElementById('menuDiv')
let infoM = document.getElementById('info_mobile')
let infoD = document.getElementById('info_desktop')
let pageButton = document.getElementsByClassName('pageButton')
let pageSubDiv = document.getElementsByClassName('pageSubDiv')
let ImageMotherDiv = document.getElementById('ImageMotherDiv')

let ChangeImage = (newIndex) => {
    images[CurrentIndex].classList.remove('Show')
    CurrentIndex = newIndex
    infoM.innerHTML = (CurrentIndex+1) + ' / ' + images.length
    infoD.innerHTML = (CurrentIndex+1) + ' / ' + images.length
    images[CurrentIndex].classList.add('Show')
}

let getParam = (sname) => {
    var params = location.search.substr(location.search.indexOf("?") + 1)    
    var sval = ""
    params = params.split("&")

    for (var i = 0; i < params.length; i++) {
        temp = params[i].split("=")
        if ([temp[0]] == sname) { sval = temp[1] }
    }
    return sval
}

for(let leftIndex = 0 ; leftIndex < LeftButtons.length ; leftIndex++) {
    LeftButtons[leftIndex].addEventListener('click', () => {
        ChangeImage(CurrentIndex == 0 ? images.length - 1 : CurrentIndex - 1)
    })
}

for(let rightIndex = 0 ; rightIndex < LeftButtons.length ; rightIndex++) {
    rightButtons[rightIndex].addEventListener('click', () => {
        ChangeImage(CurrentIndex == (images.length - 1) ? 0 : CurrentIndex + 1)
    })
}

backButton.addEventListener('click', () => {
    location.href = "/SatisFactory#ScreenShotDiv"
})

ImageMotherDiv.addEventListener('click', () => {
    location.href='../SatisFactory/IMG/ScreenShot/'+fileName+'('+ (CurrentIndex+1) +').png'
})

menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('Show3')
    menuDiv.classList.toggle('Show2')
})

for(let menuIndex = 0 ; menuIndex < pageButton.length ; menuIndex++) {
    pageButton[menuIndex].addEventListener('click', () => {
        pageSubDiv[menuIndex].classList.toggle('Show4')
    })
}