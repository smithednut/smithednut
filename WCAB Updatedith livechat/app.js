 const nav = document.querySelector('nav')
 const backToTop = document.querySelector('.back-to-top')
 const linksContainer = document.querySelector('.links-container')
 const links = document.querySelector('.nav-links')
 const linksHeight = links.getBoundingClientRect().height
 const linksContainerHeight = linksContainer.getBoundingClientRect().height
 const navHeight = nav.getBoundingClientRect().height
 const toggleBtn = document.querySelector('.toggle-btn')
 const indexDate = document.querySelector('.date')
 const contactForm = document.getElementById('contact-form')



 const date = new Date().getFullYear()
 indexDate.textContent = date
console.log(date)


toggleBtn.addEventListener('click', ()=>{
  linksContainer.classList.toggle('show-link')
})
 
 
 window.addEventListener('scroll', ()=>{
  const scrollY = window.pageYOffset
  if (scrollY > navHeight) {
    nav.classList.add('fixed-background')
  } else {
    nav.classList.remove('fixed-background')
  }

  if (scrollY > 500) {
    backToTop.classList.add('show-visibilty')
  } else {
    backToTop.classList.remove('show-visibilty')
  }
 })


const scrollLinks = document.querySelectorAll('.scroll-links')

scrollLinks.forEach((link)=>{
  link.addEventListener('click', (e)=>{
    e.preventDefault()
    const id = e.currentTarget.getAttribute('href').slice(1)
    const element = document.getElementById(id)
    let position = element.offsetTop
    window.scrollTo({left:0, top: position - navHeight})
   linksContainer.classList.remove('show-link')
    console.log(link)
  })
})

let firstName = document.getElementById('first-name')
let lastName = document.getElementById('last-name')
let email = document.getElementById('email')
let number = document.getElementById('number')
let textarea = document.getElementById('textarea')

console.log(firstName, lastName, email, number, textarea)

contactForm.addEventListener('submit', e =>{
 e.preventDefault()
 firstName.value = ''
 lastName.value = ''
 email.value = ''
 number.value = ''
 textarea.value = ''
})

console.log(window.innerWidth)