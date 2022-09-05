const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');
const website = document.querySelector('html');

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll',()=>{
    let scroll_position = window.scrollY;
    if(scroll_position > 150){
        header.style.backgroundColor = '#29323ccb';
    }
    else{
        header.style.backgroundColor = 'transparent';
    }
    if(scroll_position > 600 && scroll_position < 1200){
        website.style.backgroundColor = "#1a130b";
    }
    else if(scroll_position > 1200 && scroll_position < 1800){
        website.style.backgroundColor = "#070e22";
    }
    else if(scroll_position > 1800 && scroll_position < 2400){
        website.style.backgroundColor = "#02113a";
    }
    else if(scroll_position > 2400 && scroll_position < 3000){
        website.style.backgroundColor = "#02113a";
    }
});

menu_item.forEach((item => {
    item.addEventListener('click',()=>{
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    })
}))