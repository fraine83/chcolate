const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const dotsNav = document.querySelector('.ourcaro-nav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;
    // console.og(slideWidth);

//arrange the slides next to one another 
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};

slides.forEach(setSlidePosition);

console.log(slideSize);


//slides.forEach((slide, index) => {
  //  slide.style.left = slideWidth * index + 'px'; 
//})



// when i click nav indicator, move to that slide //
