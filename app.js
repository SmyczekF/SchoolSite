const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');
const website = document.querySelector('html');
const methods_menu = document.querySelectorAll('.header .teach-meth-menu');
const help_menu = document.querySelectorAll('.header .help-menu');


hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});


document.addEventListener('scroll',()=>{
    var scroll_position = window.scrollY;
    
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

var sub_menus = {'teach-meth': [methods_menu, false], 'help': [help_menu, false]};
var sub_menus_els = ['teach-meth-menu', 'help-menu'];

menu_item.forEach((item => {
    // if(width < 1200){
    item.addEventListener('click',()=>{
        if(!(item.className in sub_menus)){
            hamburger.classList.toggle('active');
            mobile_menu.classList.toggle('active');
        }
        
        if(item.className in sub_menus && sub_menus[item.className][1] === false){
            sub_menus[item.className][1] = !sub_menus[item.className][1];
            item.classList.toggle('active');
        }
        if(item.className in sub_menus && sub_menus[item.className][1] === true){
            sub_menus[item.className][1] = !sub_menus[item.className][1];
            sub_menus[item.className][0].forEach((el => {
                el.style.display = 'none';
            }));
        }

        if(item.className.includes('active')){
            let temp_str = item.className.substring(0, item.className.length - 7);
            sub_menus[(temp_str)][0].forEach((el => {
                el.style.display = 'list-item';
            }));

            item.classList.toggle('active');
        }
    })
    // }
    // else{
    // item.addEventListener('mouseenter',()=>{
    
    //     if(item.className in sub_menus){
    //         sub_menus[item.className][0].forEach((el => {
    //             el.style.display = 'list-item';
    //         }))
        
        
    //     }
    // })
    // item.addEventListener('mouseleave',()=>{
              
    //     if(item.className in sub_menus){
    //         sub_menus[item.className][0].forEach((el => {
    //             el.style.display = 'none';
    //         }))
    //     }
    // })
    // }
    
}));

// menu_item.forEach((item => {
    
// }));