let TodoBar = document.getElementById('TodoBar')
let InProgressBar = document.getElementById('InProgressBar')
let DoneBar = document.getElementById('DoneBar')

let MileStoneButton = document.getElementsByClassName('MileStoneSiderBarButton')
let MileStonePage = document.getElementsByClassName('MileStonePage')
let currentIndex = 4    // 현재 누른 마일스톤 페이지

MileStoneButton[currentIndex].classList.add('MS_Select')
MileStonePage[currentIndex].classList.remove('MS_Hidden')
for(let index = 0; index < MileStoneButton.length; index++) {
    MileStoneButton[index].addEventListener('click', () => {
        if(currentIndex == index) return;
        
        MileStoneButton[currentIndex].classList.remove('MS_Select')
        MileStonePage[currentIndex].classList.add('MS_Hidden')
        currentIndex = index
        MileStoneButton[currentIndex].classList.add('MS_Select')
        MileStonePage[currentIndex].classList.remove('MS_Hidden')
    })
}