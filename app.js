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


// Handle GNB scroll
const gnb = $('.nav-menu');
const logo = $('.nav-menu-title h4');

$(window).on('scroll', function(){
    if ($(window).scrollTop() > 100) {
        gnb.addClass('scroll-down');
        logo.addClass('scroll-down-title');
    } else {
        gnb.removeClass('scroll-down');
        logo.removeClass('scroll-down-title');
    }
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


// Handle Carousel
const firstButton = $('.slider-button.button1');
const secondButton = $('.slider-button.button2');
const thirdButton = $('.slider-button.button3');
const slideContainer = $('.slide-container');

const nextButton = $('.slider-button-group-2>.next');
const prevButton = $('.slider-button-group-2>.prev');

let carouselNow = 1;

firstButton.click(function(){
    slideContainer.css('transform', 'translateX(0)');
    carouselNow = 1;
});

secondButton.click(function(){
    slideContainer.css('transform', 'translateX(-100vw)');
    carouselNow = 2;
});

thirdButton.click(function(){
    slideContainer.css('transform', 'translateX(-200vw)');
    carouselNow = 3;
});


nextButton.click(function(){
    if (carouselNow < 3) {
        slideContainer.css('transform', 'translateX(-' + carouselNow + '00vw)');
        carouselNow = carouselNow + 1;
    } 
});

prevButton.click(function(){
    if (carouselNow > 1) {
        slideContainer.css('transform', 'translateX(-' + (carouselNow - 2) + '00vw)');
        carouselNow = carouselNow - 1;
    }
});


// Handle tab menu
const tabButton = $('.tab-button');
const tabContent = $('.tab-content');


tabButton.eq(0).click(function(){
    tabButton.removeClass('active');
    tabContent.removeClass('show');
    tabButton.eq(0).addClass('active');
    tabContent.eq(0).addClass('show');
});

tabButton.eq(1).click(function(){
    tabButton.removeClass('active');
    tabContent.removeClass('show');
    tabButton.eq(1).addClass('active');
    tabContent.eq(1).addClass('show');
});

tabButton.eq(2).click(function(){
    tabButton.removeClass('active');
    tabContent.removeClass('show');
    tabButton.eq(2).addClass('active');
    tabContent.eq(2).addClass('show');
});

