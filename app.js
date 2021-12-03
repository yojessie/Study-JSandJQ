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


// 369 Game
function game369(number) {
    if (number % 9 == 0) {
        console.log('clap clap');
    } else if (number % 3 == 0) {
        console.log('clap');
    } else {
        console.log('pass'); 
    }
}

game369(18);


// Real 369 Game
function real369game(number) {
    if (number % 10 == 3 || number % 10 == 6 || number % 10 == 9) {
        console.log('clap');
    } else {
        console.log('pass');
    }
}

real369game(19);