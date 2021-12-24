const productSlide = document.querySelector('.product-slide')
const productItems = document.querySelectorAll('.product-item')

//Buttons
const preBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//Counter
let counter = 4;
// const size = products[0].clientWidth;
const size = productItems[0].clientWidth;
console.log(size);

// counter++
productSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//Button Listeners

nextBtn.addEventListener('click',()=>{
    if (counter >= productItems.length - 4) return;
    productSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    productSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    console.log(counter);
    console.log(size);
    // console.log(productItems.length);
});

prevBtn.addEventListener('click',()=>{
    if (counter <= 3) return;
    productSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    productSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    // console.log(counter);
});

productSlide.addEventListener('transitionend', ()=>{
    if(productItems[counter].id === 'lastClone') {
        productSlide.style.transition = "none";
        console.log(counter);
        counter = productItems.length - 5;
        console.log(counter);
        productSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if(productItems[counter].id === 'firstClone') {
        productSlide.style.transition = "none";
        // console.log(counter);
        counter = productItems.length - counter;
        // console.log(counter);
        productSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
})