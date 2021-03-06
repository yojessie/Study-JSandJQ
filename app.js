// Handle login Modal
const loginButton = $('.jumbotron a');
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

const outerOption = ['??????', '??????', '??????'];
const topOption = ['????????????', '?????????', '?????????'];
const bottomOption = ['?????????', '?????????', '??????'];

firstOption.on('change', function(){
    secondOption.html('');
    secondOption.removeClass('hide');
    
    if (firstOption.val() == '?????????') {
        outerOption.forEach(function(i){
            let templete = `<option>${i}</option>`;
            secondOption.append(templete);
        })
    }
    if (firstOption.val() == '??????') {
        topOption.forEach(function(i){
            let templete = `<option>${i}</option>`;
            secondOption.append(templete);
        })
    }
    if (firstOption.val() == '??????') {
        bottomOption.forEach(function(i){
            let templete = `<option>${i}</option>`;
            secondOption.append(templete);
        })
    }
});



// Handle product card (Data binding)
const cardGroup = $('.card-group');
const sortButtons = $('.sort-button button');
const sortExpensive = $('.sort-button .expensive');
const sortCheaper = $('.sort-button .cheaper');
const sortAlphabet = $('.sort-button .alphabet');
const priceFilter = $('.sort-button .price-filter');
const resetButton = $('.sort-button .reset');

let products = [
    { id : 0, price : 70000, title : 'C', image : '/asset/img-03.jpg'},
    { id : 1, price : 50000, title : 'B', image : '/asset/img-02.jpg' },
    { id : 2, price : 60000, title : 'A', image : '/asset/img-01.jpg' }
];
let productSort = [...products];

function makeCards() {
    cardGroup.html('');
    productSort.forEach(function(i){
        let templete = `
            <div class="card">
                <img src="${i.image}">
                  <div class="card-body">
                      <h5>${i.title}</h5>
                      <p>${i.price} ???</p>
                      <button class="btn btn-red">????????????</button>
                  </div>
            </div>`;
        cardGroup.append(templete);
    });
};

makeCards();


// resetButton.click(function() {
//     sortButtons.removeClass('sort-active');
//     resetButton.addClass('sort-active');
//     productSort.reset();
//     makeCards();
// });

sortExpensive.click(function() {
    sortButtons.removeClass('sort-active');
    sortExpensive.addClass('sort-active');
    productSort = [];
    productSort = products.sort(function(a,b) {
        return b.price - a.price;
    });
    makeCards();
});

sortCheaper.click(function() {
    sortButtons.removeClass('sort-active');
    sortCheaper.addClass('sort-active');
    productSort = products.sort(function(a,b) {
        return a.price - b.price;
    });
    makeCards();
});

sortAlphabet.click(function() {
    sortButtons.removeClass('sort-active');
    sortAlphabet.addClass('sort-active');
    productSort = [];
    productSort = products.sort(function(a,b) {
        if (a.title < b.title) {
            return -1;
        }
        if (a.title > b.title) {
            return 1;
        }
        return 0;
    });
    makeCards();
});

priceFilter.click(function() {
    sortButtons.removeClass('sort-active');
    priceFilter.addClass('sort-active');
    productSort = [];
    productSort = products.filter(function(a) {
        return a.price <= 60000;
    });
    makeCards();
});


// Get text data from API
const takeDataTitle = $('.get-data h4');
const takeDataButton = $('.get-data .button-group button:first-child');
const dataResetButton = $('.get-data .button-group button:last-child');

takeDataButton.click(function(){
    $.ajax({
        url : 'https://codingapple1.github.io/hello.txt',
        type : 'GET'
    }).done(function(data){
        takeDataTitle.html(data);
    }).fail(function(){
        takeDataTitle.html('???????????? ??????????????? ??????????????????');
    }).always(function(){
        console.log('?????????????????? ???????????? ?????? ??????');
    });
});

dataResetButton.click(function(){
    takeDataTitle.html('API?????? ???????????? ????????????');
});


// Make product card with more button
const moreButton = $('.get-product-card button');
const productDiv = $('.get-product-card .products');

moreButton.click(function(){
    $.ajax({
        url : 'https://codingapple1.github.io/data.json',
        type : 'GET'
    }).done(function(data){
        let templete = `
            <div class="card">
                <img src="${data.img}">
                  <div class="card-body">
                      <h5>${data.model}</h5>
                      <p>${data.price} ???</p>
                      <button class="btn btn-red">????????????</button>
                  </div>
            </div>`;
        productDiv.append(templete);
    })
})



// Handle scroll animation
const cardBox = $('.image-card');

$(window).scroll(function(){
    function slope(height1, height2, variable1, variable2) {
        let a = (variable1 - variable2) / (height1 - height2);
        let b = -(height1 * a) + variable1;
        
        let height = $(window).scrollTop();
        variable = a * height + b
        return variable;
    }
    
    cardBox.eq(0).css('opacity', slope(3600, 4090, 1, 0));
    
    if (slope(3600, 4090, 1, .9) <= 1) {
        cardBox.eq(0).css('transform', `scale(${slope(3600, 4090, 1, .9)})`);
    } else {
        cardBox.eq(0).css('transform', 'scale(1)')
    }
    
    cardBox.eq(1).css('opacity', slope(4140, 4590, 1, 0));
    
    if (slope(4140, 4590, 1, .9) <= 1) {
        cardBox.eq(1).css('transform', `scale(${slope(4140, 4590, 1, .9)})`);
    } else {
        cardBox.eq(1).css('transform', 'scale(1)')
    }
})



// Handle touch carousel
const CarouselButton = $('.carousel-button');
const carouselContainer = $('.carousel-container');

CarouselButton.eq(0).css('opacity', '1');

CarouselButton.eq(0).click(function(){
    carouselContainer.addClass('transforming');
    carouselContainer.css('transform', 'translateX(0)');
    setTimeout(function(){
        carouselContainer.removeClass('transforming');
    }, 500)
    CarouselButton.css('opacity', '.5');
    CarouselButton.eq(0).css('opacity', '1');
});

CarouselButton.eq(1).click(function(){
    carouselContainer.addClass('transforming');
    carouselContainer.css('transform', 'translateX(-690px)');
    setTimeout(function(){
        carouselContainer.removeClass('transforming');
    }, 500)
    CarouselButton.css('opacity', '.5');
    CarouselButton.eq(1).css('opacity', '1');
});

CarouselButton.eq(2).click(function(){
    carouselContainer.addClass('transforming');
    carouselContainer.css('transform', 'translateX(-1380px)');
    setTimeout(function(){
        carouselContainer.removeClass('transforming');
    }, 500)
    CarouselButton.css('opacity', '.5');
    CarouselButton.eq(2).css('opacity', '1');
});


// Use Hammer.js
const carouselImage = document.querySelectorAll('.carousel-box');

const manager0 = new Hammer.Manager(carouselImage[0]);
manager0.add(new Hammer.Pan({threshold: 0}));
manager0.on('pan', function(e){
    if (e.deltaX < 0) {
        carouselContainer.css('transform', `translateX(${e.deltaX}px)`);

        if (e.isFinal) {
            carouselContainer.addClass('transforming');
            carouselContainer.css('transform', `translateX(-690px)`);
            setTimeout(function() {
                carouselContainer.removeClass('transforming');
            }, 500);
            CarouselButton.css('opacity', '.5');
            CarouselButton.eq(1).css('opacity', '1');
        }
    } 
});

const manager1 = new Hammer.Manager(carouselImage[1]);
manager1.add(new Hammer.Pan({threshold: 0}));
manager1.on('pan', function(e){
    if (e.deltaX < 0) {
        carouselContainer.css('transform', `translateX(${e.deltaX - 690}px)`);

        if (e.isFinal) {
            carouselContainer.addClass('transforming');
            carouselContainer.css('transform', `translateX(-1380px)`);
            setTimeout(function() {
                carouselContainer.removeClass('transforming');
            }, 500);
            CarouselButton.css('opacity', '.5');
            CarouselButton.eq(2).css('opacity', '1');
        }
    } else if (e.deltaX > 0) {
        carouselContainer.css('transform', `translateX(${e.deltaX - 690}px)`);

        if (e.isFinal) {
            carouselContainer.addClass('transforming');
            carouselContainer.css('transform', `translateX(0px)`);
            setTimeout(function() {
                carouselContainer.removeClass('transforming');
            }, 500);
            CarouselButton.css('opacity', '.5');
            CarouselButton.eq(0).css('opacity', '1');
        }
    }
})

const manager2 = new Hammer.Manager(carouselImage[2]);
manager2.add(new Hammer.Pan({threshold: 0}));
manager2.on('pan', function(e){
    if (e.deltaX > 0) {
        carouselContainer.css('transform', `translateX(${e.deltaX - 1380}px)`);

        if (e.isFinal) {
            carouselContainer.addClass('transforming');
            carouselContainer.css('transform', `translateX(-690px)`);
            setTimeout(function() {
                carouselContainer.removeClass('transforming');
            }, 500);
            CarouselButton.css('opacity', '.5');
            CarouselButton.eq(1).css('opacity', '1');
        }
    }
})



// Typing Animation
const typingButton = $('.typing-animation button');
const typingTag = $('.typing-animation h2');
const typingText = $('.typing-animation h2').html();

typingButton.click(function(){
    typingAnimation(typingTag, typingText);
})

function typingAnimation(tag, text) {
    tag.html('');

    for (let i = 0; i < text.length; i++) {
        setTimeout(function(){
            tag.html(tag.html() + text[i])
        }, 200 * i)
    }
}