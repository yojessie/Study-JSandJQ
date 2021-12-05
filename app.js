// Handle login Modal
const loginButton = $('.btn');
const closeButton = $('.close-button');
const textModal = $('.login-modal');


loginButton.on('click', function(){
    textModal.addClass('login-modal-open');
})

closeButton.on('click', function(){
    textModal.removeClass('login-modal-open');
})


// Handle login submit
const loginForm = $('.login-form');
const emailInput = $('.email-input');
const passwordInput = $('.password-input');
const warningEmail = $('.warning.email');
const warningPassword = $('.warning.password');

const regularEmail = RegExp(/^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/);
const regularPassword = RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^*()\-_=+\\\|\[\]{};:\'",.<>\/?]).{8,16}$/);

loginForm.on('submit', function(event){
    if (emailInput.val() == '') {
        event.preventDefault();
        warningEmail.show();
    } else if (regularEmail.test(emailInput.val()) == false) {
        event.preventDefault();
        warningEmail.text('Please enter the email in correct format');
        warningEmail.show();
    } else {
        warningEmail.hide();
    }
    
    if (passwordInput.val() == '') {
        event.preventDefault();
        warningPassword.show();
    } else if (regularPassword.test(passwordInput.val()) == false) {
        event.preventDefault();
        warningPassword.text('Password must be within 6 to 18 characters including uppercase, lowercase, numbers and special characters.');
        warningPassword.show();
    } else {
        warningPassword.hide();
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
    leftMenu.addClass('left-menu-open');
});

leftClose.click(function(){
    leftMenu.removeClass('left-menu-open');
})
