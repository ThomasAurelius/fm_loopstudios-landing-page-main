const menuBtn = document.querySelector('.menu-btn')
const closeBtn = document.querySelector('.close-btn')
const mobileMenu = document.querySelector('.mobile-menu-container')

menuBtn.addEventListener('click', () => {
   mobileMenu.style.display = 'block'
   menuBtn.style.display = 'none'
   closeBtn.style.display ='block'
})

closeBtn.addEventListener('click', () => {
   mobileMenu.style.display = 'none'
   menuBtn.style.display = 'block'
   closeBtn.style.display = 'none'
})