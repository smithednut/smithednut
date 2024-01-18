
const slides = document.querySelectorAll('.slide')
const prevBtn = document.querySelector('.prevBtn')
const nextBtn = document.querySelector('.nextBtn')

slides.forEach((slide, index)=>{
  slide.style.left = `${index * 100}%`
})

let counter = 0


const carousel = () =>{
  if (counter === slides.length) {
    counter = 0
  } 
  if (counter < 0) {
    counter = slides.length - 1
  }
  

  slides.forEach((slide)=>{
    slide.style.transform = `translateX(-${counter * 100}%)`
  })
}

setInterval(() => {
    counter++
    carousel()
}, 2000);


const lawman = document.getElementById('lawman')
const fromVal = localStorage.getItem('fullName')

window.addEventListener('DOMContentLoaded', ()=>{
  if (fromVal) {
    lawman.textContent = fromVal
  } else {
    lawman.textContent = 'Sarah Lawman'
  }
})

console.log('working from beneficiaries ')
