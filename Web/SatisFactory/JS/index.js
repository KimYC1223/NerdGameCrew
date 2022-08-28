
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

let HDD_Items = document.getElementsByClassName('HDD_Item')
let HDD_Items2 = document.getElementsByClassName('HDD_Item2')
let HDD_PageButtons = document.getElementsByClassName('HDD_PageButton')

let HDD_CurrentPageIndex = HDD_PageButtons.length-1;

let HDD_RedrawHDDPage = (buttonIndex) => {
    for(var i = 0 ; i < 3; i++) {
        var HDD_ItemIndex = 3 * HDD_CurrentPageIndex + i;
        if(HDD_ItemIndex < HDD_Items.length )
            HDD_Items[HDD_ItemIndex].classList.add('HDD_Item_Hidden');
    }
    HDD_PageButtons[HDD_CurrentPageIndex].classList.remove('HDD_SelectedPageButton')
    HDD_CurrentPageIndex = buttonIndex
    for(var i = 0 ; i < 3; i++) {
        var HDD_ItemIndex = 3 * HDD_CurrentPageIndex + i
        if(HDD_ItemIndex < HDD_Items.length ) 
            HDD_Items[HDD_ItemIndex].classList.remove('HDD_Item_Hidden');
    }
    HDD_PageButtons[HDD_CurrentPageIndex].classList.add('HDD_SelectedPageButton')

}
HDD_RedrawHDDPage(0)

for(let HDD_PageButtonIndex = 0 ; HDD_PageButtonIndex < HDD_PageButtons.length; HDD_PageButtonIndex++) {
    HDD_PageButtons[HDD_PageButtonIndex].addEventListener('click',() => {
        HDD_RedrawHDDPage(HDD_PageButtonIndex)
        setTimeout(()=> {
            location.href = '#HDD_Div'
        },5)
    })
}

for(let HDD_PageButtonIndex2 = 0 ; HDD_PageButtonIndex2 < HDD_Items.length; HDD_PageButtonIndex2++) {
    HDD_Items[HDD_PageButtonIndex2].addEventListener('mouseout',() => {
        HDD_Items[HDD_PageButtonIndex2].classList.remove('HDD_Item_hover')
    })

    HDD_Items[HDD_PageButtonIndex2].addEventListener('mouseover',() => {
        HDD_Items[HDD_PageButtonIndex2].classList.add('HDD_Item_hover')
    })

    HDD_Items[HDD_PageButtonIndex2].addEventListener('touchend',() => {
        HDD_Items[HDD_PageButtonIndex2].classList.remove('HDD_Item_hover')
    })

    HDD_Items[HDD_PageButtonIndex2].addEventListener('touchstart',() => {
        HDD_Items[HDD_PageButtonIndex2].classList.add('HDD_Item_hover')
    })
}

for(let HDD_PageButtonIndex3 = 0 ; HDD_PageButtonIndex3 < HDD_Items2.length; HDD_PageButtonIndex3++) {
    HDD_Items2[HDD_PageButtonIndex3].addEventListener('mouseout',() => {
        HDD_Items2[HDD_PageButtonIndex3].classList.remove('HDD_Item2_Hover')
    })

    HDD_Items2[HDD_PageButtonIndex3].addEventListener('mouseover',() => {
        HDD_Items2[HDD_PageButtonIndex3].classList.add('HDD_Item2_Hover')
    })

    HDD_Items2[HDD_PageButtonIndex3].addEventListener('touchend',() => {
        HDD_Items2[HDD_PageButtonIndex3].classList.remove('HDD_Item2_Hover')
    })

    HDD_Items2[HDD_PageButtonIndex3].addEventListener('touchstart',() => {
        HDD_Items2[HDD_PageButtonIndex3].classList.add('HDD_Item2_Hover')
    })
}


let NoteArray = document.getElementsByClassName('NoteButton')
let NoteContentArray = document.getElementsByClassName('NoteImageDiv')

let Note_CurrentIndex = -1;

for(let NoteIndex = 0 ; NoteIndex < NoteArray.length; NoteIndex++) {
    NoteArray[NoteIndex].addEventListener('click',() => {
        if (Note_CurrentIndex == NoteIndex) {
            NoteArray[Note_CurrentIndex].classList.remove('NoteShow2')
            NoteContentArray[Note_CurrentIndex].classList.remove('NoteShow')
            Note_CurrentIndex = -1
        } else {
            if(Note_CurrentIndex != -1) {
                NoteArray[Note_CurrentIndex].classList.remove('NoteShow2')
                NoteContentArray[Note_CurrentIndex].classList.remove('NoteShow')
            }
            Note_CurrentIndex = NoteIndex
            NoteArray[Note_CurrentIndex].classList.add('NoteShow2')
            NoteContentArray[Note_CurrentIndex].classList.add('NoteShow')
        }
    })
}

let screenshot_Items = document.getElementsByClassName('screenshot_CardDiv')

for(let screenshot_ButtonIndex = 0 ; screenshot_ButtonIndex < screenshot_Items.length; screenshot_ButtonIndex++) {
    screenshot_Items[screenshot_ButtonIndex].addEventListener('mouseout',() => {
        screenshot_Items[screenshot_ButtonIndex].classList.remove('screenshot_CardDiv_hover')
    })

    screenshot_Items[screenshot_ButtonIndex].addEventListener('mouseover',() => {
        screenshot_Items[screenshot_ButtonIndex].classList.add('screenshot_CardDiv_hover')
    })

    screenshot_Items[screenshot_ButtonIndex].addEventListener('touchend',() => {
        screenshot_Items[screenshot_ButtonIndex].classList.remove('screenshot_CardDiv_hover')
    })

    screenshot_Items[screenshot_ButtonIndex].addEventListener('touchstart',() => {
        screenshot_Items[screenshot_ButtonIndex].classList.add('screenshot_CardDiv_hover')
    })
}

let screenshot_PageButtons = document.getElementsByClassName('screenshot_PageButton')
let screenshot_Pages = document.getElementsByClassName('screenshot_Page')
let screenshot_ClickedPage = 0;

for(let screenshot_PageIndex = 0 ; screenshot_PageIndex < screenshot_PageButtons.length; screenshot_PageIndex++) {
    screenshot_PageButtons[screenshot_PageIndex].addEventListener('click',() => {
        if(!screenshot_PageButtons[screenshot_PageIndex].classList.contains('screenshot_Clickable'))
            return;
        screenshot_PageButtons[screenshot_ClickedPage].classList.remove('screenshot_Clicked')
        screenshot_Pages[screenshot_ClickedPage].classList.add('MS_Hidden')
        screenshot_ClickedPage = screenshot_PageIndex
        screenshot_PageButtons[screenshot_ClickedPage].classList.add('screenshot_Clicked')
        screenshot_Pages[screenshot_ClickedPage].classList.remove('MS_Hidden')
    })
}