var barsBtn = document.querySelector('#bars');
var listItem = document.querySelector('#options')
var navBar = document.querySelector('#nav-bar')
barsBtn.addEventListener("click", myFunction);

listItem.classList.add('close');

function myFunction() {
    var currentHeight = listItem.clientHeight;
    console.log(currentHeight);
    listItem.classList.toggle('close');
    listItem.classList.toggle('open');
}

// Tim parent node
var btnsLv1 = document.querySelectorAll('.btn-lv1');

var hideMenu = document.querySelectorAll('.dropdown-menu');
for(var item of hideMenu) {
    item.classList.add('hide-nav-item');
}
Array.from(btnsLv1).forEach(check);

function check(btn) {
    var isClose = true;
    btn.onclick = function() {

        var parent = btn.parentElement.parentElement;
        var dropDownMenu = parent.querySelector('.dropdown-menu');
        var menuHeight = dropDownMenu.querySelectorAll('li').length * 40;
        dropDownMenu.classList.toggle('show-nav-item');
        dropDownMenu.classList.toggle('hide-nav-item');
        if (isClose) {
            dropDownMenu.style.height = menuHeight + 'px';
            isClose = false
            
        } else {
            dropDownMenu.style.height = 0;
            isClose = true;
        }    
    }
};

