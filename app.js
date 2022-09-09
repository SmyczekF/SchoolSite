const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');
const website = document.querySelector('html');
const methods_menu = document.querySelectorAll('.header .teach-meth-menu')

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
    if(scroll_position > 600 && scroll_position < 1600){
        website.style.backgroundColor = "#e1f4f5";
    }
    else if(scroll_position > 1600 && scroll_position < 2200){
        website.style.backgroundColor = "#b2f7d0";
    }
    else if(scroll_position > 2200 && scroll_position < 2800){
        website.style.backgroundColor = "#c6f7b2";
    }
    else if(scroll_position > 2800 && scroll_position < 3400){
        website.style.backgroundColor = "#b3e4ff";
    }
    else if(scroll_position > 3400 && scroll_position < 4000){
        website.style.backgroundColor = "#d3c0fc";
    }
    else{
        website.style.backgroundColor = "#fcc0cf";
    }
});
var isClicked = false;

menu_item.forEach((item => {
    item.addEventListener('click',()=>{
        if(item.className != 'teach-meth'){
            hamburger.classList.toggle('active');
            mobile_menu.classList.toggle('active');
        }
        
        console.log(isClicked);
        if(item.className === 'teach-meth' && isClicked === false){
            isClicked = !isClicked;
            item.classList.toggle('active');
        }
        else if (item.className === 'teach-meth' && isClicked === true){
            isClicked = !isClicked;
            methods_menu.forEach((el => {
                el.style.display = 'none';
            }));
        }

        if(item.className ==='teach-meth active'){
            methods_menu.forEach((el => {
                el.style.display = 'list-item';
            }));

            item.classList.toggle('active');
        }
    })
}));