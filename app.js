// Handle login Modal
const loginButton = $('.btn');
const closeButton = $('.close-button');
const loginModal = $('.login-modal');


loginButton.click (function() {
    loginModal.addClass('login-modal-open');
})

closeButton.click (function() {
    loginModal.removeClass('login-modal-open');
})

loginModal.click (function(event) {
    if (event.target == this) {
        loginModal.removeClass('login-modal-open');
    }
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


// Handle tab menu (by using for loop)
// const tabButton = $('.tab-button');
// const tabContent = $('.tab-content');

// for (let i = 0; i < tabButton.length; i++) {
//     tabButton.eq(i).click(function(){
//         openTab(i);
//     });
// };

// function openTab(i) {
//     tabButton.removeClass('active');
//     tabContent.removeClass('show');
//     tabButton.eq(i).addClass('active');
//     tabContent.eq(i).addClass('show');
// };

const tabList = $('.tab-list');
const tabButton = $('.tab-button');
const tabContent = $('.tab-content');

for (let i = 0; i < tabButton.length; i++) {
    tabButton.click(function(event){
        if (event.target == document.querySelectorAll('.tab-button')[i]) {
          openTab(i)
        };
    });
}

function openTab(i) {
    tabButton.removeClass('active');
    tabContent.removeClass('show');
    tabButton.eq(i).addClass('active');
    tabContent.eq(i).addClass('show');
};


// Handle select box
const firstOption = $('.select-control');
const secondOption = $('.select-control.second');

const outerOption = ['자켓', '코트', '패딩'];
const topOption = ['블라우스', '스웨터', '맨투맨'];
const bottomOption = ['슬랙스', '청바지', '치마'];

firstOption.on('change', function(){
    secondOption.html('');
    secondOption.removeClass('hide');
    
    if (firstOption.val() == '아우터') {
        outerOption.forEach(function(i){
            let templete = `<option>${i}</option>`;
            secondOption.append(templete);
        })
    }
    if (firstOption.val() == '상의') {
        topOption.forEach(function(i){
            let templete = `<option>${i}</option>`;
            secondOption.append(templete);
        })
    }
    if (firstOption.val() == '하의') {
        bottomOption.forEach(function(i){
            let templete = `<option>${i}</option>`;
            secondOption.append(templete);
        })
    }
});



// Handle product card (Data binding)
const productCardTitle = $('.card-body h5');
const productCardPrice = $('.card-body p');
const sortButtons = $('.sort-button button');
const sortExpensive = $('.sort-button .expensive');
const sortCheaper = $('.sort-button .cheaper');
const sortAlphabet = $('.sort-button .alphabet');

let products = [
    { id : 0, price : 70000, title : 'Blossom Dress' },
    { id : 1, price : 50000, title : 'Springfield Shirt' },
    { id : 2, price : 60000, title : 'Black Monastery' }
];

for (let i = 0; i < products.length; i++) {
    productCardTitle.eq(i).html(products[i].title);
    productCardPrice.eq(i).html(products[i].price + '원');
};

sortExpensive.click(function() {
    sortButtons.removeClass('sort-active');
    sortExpensive.addClass('sort-active');
    products.sort(function(a,b) {
        return b.price - a.price;
    });
    for (let i = 0; i < products.length; i++) {
        productCardTitle.eq(i).html(products[i].title);
        productCardPrice.eq(i).html(products[i].price + '원');
    }
});

sortCheaper.click(function() {
    sortButtons.removeClass('sort-active');
    sortCheaper.addClass('sort-active');
    products.sort(function(a,b) {
        return a.price - b.price;
    });
    for (let i = 0; i < products.length; i++) {
        productCardTitle.eq(i).html(products[i].title);
        productCardPrice.eq(i).html(products[i].price + '원');
    }
});

sortAlphabet.click(function() {
    sortButtons.removeClass('sort-active');
    sortAlphabet.addClass('sort-active');
    products.sort(function(a,z) {
        return a.title - z.title;
    });
    for (let i = 0; i < products.length; i++) {
        productCardTitle.eq(i).html(products[i].title);
        productCardPrice.eq(i).html(products[i].price + '원');
    }
});