burger = document.querySelector('.ham-burger-icon')
navbar = document.querySelector('.navbar')
rightNav = document.querySelector('.rightNav')
navlist = document.querySelector('.navlist')

burger.addEventListener('click',()=>{
    navbar.classList.toggle('height-nav');
    navlist.classList.toggle('visibility-class');
    rightNav.classList.toggle('visibility-class');
})