const slideContainer=document.querySelector('.slider-container')
const slideRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')
const slideUp= document.querySelector('.Up-button')
const slideDown= document.querySelector('.down-button')
const slideLenght= slideRight.querySelectorAll('div').length

let activeSlideIndex = 0
slideLeft.style.top = `-${(slideLenght-1) * 100}vh `

slideUp.addEventListener('click', () => changeSlide('Up'))
slideDown.addEventListener('click', () => changeSlide('down'))

const changeSlide=(direction) => {
    const SliderHeight = slideContainer.clientHeight
    if(direction ==='Up') {
       activeSlideIndex++
       if(activeSlideIndex > slideLenght - 1) {
        activeSlideIndex = 0}}
       else if (direction ==='down'){
        activeSlideIndex--
        if (activeSlideIndex < 0){
            activeSlideIndex = slideLenght - 1
        }

       }

    
    slideRight.style.transform = `translateY(-${activeSlideIndex * SliderHeight}px)`
    slideLeft.style.transform = `translateY(${activeSlideIndex * SliderHeight}px)`
    }