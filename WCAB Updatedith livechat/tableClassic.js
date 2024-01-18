const toggleBtn = document.querySelector('.toggle-btn')
const linksContainer = document.querySelector('.links-container')
const scrollLinks = document.querySelectorAll('.scroll-links')


toggleBtn.addEventListener('click', ()=>{
  linksContainer.classList.toggle('show-link')
})

const nav = document.querySelector('nav')
 const backToTop = document.querySelector('.back-to-top')
 const navHeight = nav.getBoundingClientRect().height
 console.log(backToTop)
 
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
 
scrollLinks.forEach((link)=>{
  link.addEventListener('click', ()=>{
    linksContainer.classList.remove('show-link')
  })
})





let form = document.getElementById('validation-form')
let dob = document.getElementById('dob')
let valAddress = document.getElementById('val-address')
let valAddress1 = document.getElementById('val-address1')
let valCity = document.getElementById('val-city')
let valCity2 = document.getElementById('val-city2')
let valZip = document.getElementById('val-zip')
let valCountry = document.getElementById('val-country')
let valEmail = document.getElementById('val-email')
let valNumber = document.getElementById('val-number')
let valMessage = document.getElementById('val-message')




form.addEventListener('submit', e => {
  e.preventDefault()
  let fullName = document.getElementById('full-name').value
  localStorage.setItem('fullName', fullName)
  window.location.href = 'beneficiaries.html'
  dob.value = ''
  valAddress.value = ''
  valAddress1.value = ''
  valCity.value = ''
  valCity2.value = ''
  valZip.value = ''
  valCountry.value = ''
  valEmail.value = ''
  valNumber.value = ''
  valMessage.value = ''
})
