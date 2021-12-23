var barsBtn = document.querySelector('#bars');
var listItem = document.querySelector('#options')
var navBar = document.querySelector('#nav-bar')
barsBtn.addEventListener("click", myFunction);

var isClose = true;

function myFunction() {
    if (isClose) {
        listItem.classList.add('open')
        listItem.classList.remove('close')

        isClose = false
        
    } else {
        listItem.classList.remove('open')
        listItem.classList.add('close')

        isClose = true;
    }
}