var barsBtn = document.querySelector('#bars');
var listItem = document.querySelector('#options')
var navBar = document.querySelector('#nav-bar1')
barsBtn.addEventListener("click", myFunction);

listItem.classList.add('close')
var isClose = true;

function myFunction() {
    listItem.classList.toggle('close');
    listItem.classList.toggle('open');
    // if (isClose) {
    //     listItem.classList.add('open')
    //     listItem.classList.remove('close')

    //     isClose = false
        
    // } else {
    //     listItem.classList.remove('open')
    //     listItem.classList.add('close')

    //     isClose = true;
    // }
}

// Tim parent node
var btnsLv1 = document.querySelectorAll('.btn-lv1');

var hideMenu = document.querySelectorAll('.dropdown-menu');
for(var item of hideMenu) {
    item.classList.add('hide-nav-item');
}
Array.from(btnsLv1).forEach(check);

function check(btn) {
    btn.onclick = function() {
        var parent = btn.parentElement.parentElement;
        var dropDownMenu = parent.querySelector('.dropdown-menu');
        var menuHeight = dropDownMenu.querySelectorAll('li').length * 40;
        dropDownMenu.classList.toggle('show-nav-item');
        dropDownMenu.classList.toggle('hide-nav-item');
        if (isClose) {
            // dropDownMenu.classList.add('show-nav-item')
            // dropDownMenu.classList.remove('hide-nav-item')
            dropDownMenu.style.height = menuHeight + 'px';
            isClose = false
            
        } else {
            // dropDownMenu.classList.remove('show-nav-item')
            // dropDownMenu.classList.add('hide-nav-item')
            dropDownMenu.style.height = 0;
            isClose = true;
        }    
    }
};
