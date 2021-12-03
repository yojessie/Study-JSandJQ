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

loginForm.on('submit', function(event){
    if (emailInput.val() == '') {
        event.preventDefault();
        alert('Please enter your Email');
    }
})


// Handle GNB menu
const menuButton = $('.nav-button');
const menuList = $('.nav-sub');

menuButton.click(function(){
    menuList.slideToggle();
})