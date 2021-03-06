const productSlide = document.querySelector('.product-slide');
const productItems = document.querySelectorAll('.product-item');



//Buttons
let preBtn = document.querySelector('#prevBtn');
let nextBtn = document.querySelector('#nextBtn');

//Counter
let counter = 4;
const size = productItems[0].clientWidth;

// counter++
productSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//Button Listeners

nextBtn.addEventListener('click',()=>{
    if (counter >= productItems.length - 4) return;
    productSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    productSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click',()=>{
    if (counter <= 3) return;
    productSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    productSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

productSlide.addEventListener('transitionend', ()=>{
    if(productItems[counter].id === 'lastClone') {
        productSlide.style.transition = "none";
        counter = productItems.length - 5;
        productSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if(productItems[counter].id === 'firstClone') {
        productSlide.style.transition = "none";
        counter = productItems.length - counter;
        productSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
})
