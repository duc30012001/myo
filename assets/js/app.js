const slide = document.querySelector('.slide')
const images = document.querySelectorAll('.image')

//Buttons
const preBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//Counter
let counter = 4;
// const size = images[0].clientWidth;
const size = images[0].clientWidth;
console.log(size);

// counter++
slide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//Button Listeners

nextBtn.addEventListener('click',()=>{
    if (counter >= images.length - 4) return;
    slide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    console.log(counter);
    // console.log(images.length);
});

prevBtn.addEventListener('click',()=>{
    if (counter <= 3) return;
    slide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    // console.log(counter);
});

slide.addEventListener('transitionend', ()=>{
    if(images[counter].id === 'lastClone') {
        slide.style.transition = "none";
        console.log(counter);
        counter = images.length - 5;
        console.log(counter);
        slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if(images[counter].id === 'firstClone') {
        slide.style.transition = "none";
        // console.log(counter);
        counter = images.length - counter;
        // console.log(counter);
        slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
})