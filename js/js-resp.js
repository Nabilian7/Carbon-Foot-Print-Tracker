burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
rightnav = document.querySelector('.rightNav')
navList = document.querySelector('.nav-list')

burger.addEventListener('click',()=>{
         navList.classList.toggle('v-class-resp');
         rightnav.classList.toggle('v-class-resp');
         navbar.classList.toggle('h-nav-resp');
 
})