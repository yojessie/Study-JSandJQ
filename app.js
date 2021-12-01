const alert = $('.alert');
const span = $('.alert span');
const alertButton = $('.alert button');
const button1 = $('.make-alert.first');
const button2 = $('.make-alert.second');

function handleAlert(property1, message, property2) {
    alert.css('display', property1);
    button1.css('display', property2);
    button2.css('display', property2);
    span.html(message);
}

button1.on('click', function(){handleAlert('flex', '아이디를 입력하세요', 'none')});
button2.on('click', function(){handleAlert('flex', '비밀번호를 입력하세요', 'none')});
alertButton.on('click', function(){handleAlert('none', '', 'inline-block')});
