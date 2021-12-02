// Handle more Modal
const moreButton = $('.btn');
const closeButton = $('.close-button');
const textModal = $('.more-modal');


moreButton.on('click', function(){
    textModal.toggle();
})

closeButton.on('click', function(){
    textModal.toggle();
})


// Handle GNB menu
const menuButton = $('.nav-button');
const menuList = $('.nav-sub');

menuButton.click(function(){
    menuList.slideToggle();
})