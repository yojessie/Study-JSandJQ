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


// 이자율 계산하기
// function depositAfter(deposit) {
//     if (deposit <= 50000) {
//         console.log(deposit * 1.15 * 1.15);
//     } else {
//         console.log(deposit * 1.2 * 1.2);
//     }
// }
// depositAfter(60000);

let deposit = 60000;
let depositAfter = 0;

if (deposit <= 50000) {
    depositAfter = deposit * 1.15 * 1.15;
} else {
    depositAfter = deposit * 1.2 * 1.2;
}

console.log(depositAfter);


// 최대 커피 리필양 계산하기
// let coffee = 360;
// let firstRefill = coffee * 2 / 3;
// let secondRefill = firstRefill * 2 / 3;
// let coffeeDrank = coffee + firstRefill + secondRefill;
// console.log(coffeeDrank + 'ml');

let coffee = 360;
let coffeeDrank = 0;

let refill = coffee * 2 / 3;
coffeeDrank = coffee + refill;

refill = coffee * 2 / 3;
coffeeDrank = coffee + refill;

console.log(coffeeDrank + 'ml');

