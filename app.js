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
    leftMenu.addClass('left-menu-open');
});

leftClose.click(function(){
    leftMenu.removeClass('left-menu-open');
})

// animation 구현할때 자바스크립트에서 animate 추가하는 식으로는 느려서 잘 안쓴다.
// css에서 transition 속성을 추가 한 후, 자바스크립트에서 css 속성을 바꾸는 방식으로 사용.
// transition을 줄 때, margin/width/position 등을 조절해서 사용하는 것은 비추
// transform: translate() / rotate() / scale(); 을 사용하자.
// 사실 addClass 등의 방식으로 푸는것이 가장 BEST