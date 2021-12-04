// Handle login Modal
const moreButton = $('.btn');
const closeButton = $('.close-button');
const textModal = $('.login-modal');


moreButton.on('click', function(){
    textModal.toggle();
})

closeButton.on('click', function(){
    textModal.toggle();
})


// Handle login submit
const loginForm = $('.login-form');
const emailInput = $('.email-input');
const passwordInput = $('.password-input');
const warningEmail = $('.warning.email');
const warningPassword = $('.warning.password');

loginForm.on('submit', function(event){
    if (emailInput.val() == '') {
        event.preventDefault();
        warningEmail.show();
    } 
    
    if (passwordInput.val() == '') {
        event.preventDefault();
        warningPassword.show();
    }
})


// Handle GNB menu
const menuButton = $('.nav-button');
const menuList = $('.nav-sub');

menuButton.click(function(){
    menuList.slideToggle();
})


// Handle left menu
const leftMenuButton = $('.left-menu-button');
const leftMenu = $('.left-menu');
const leftClose = $('.left-menu-close');

leftMenuButton.click(function(){
    leftMenu.animate({marginLeft : '0'}, 500);
});

leftClose.click(function(){
    leftMenu.animate({marginLeft : '-240px'}, 500);
})
