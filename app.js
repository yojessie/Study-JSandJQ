const alert = document.querySelector('.alert');
const span = document.querySelector('.alert span');
const alertButton = document.querySelector('.alert button');
const button1 = document.querySelector('.make-alert.first');
const button2 = document.querySelector('.make-alert.second');

function handleAlert(property1, message, property2) {
    alert.style.display = property1;
    button1.style.display = property2;
    button2.style.display = property2;
    span.innerHTML = message;
}

button1.addEventListener('click', function(){handleAlert('flex', '아이디를 입력하세요', 'none')});
button2.addEventListener('click', function(){handleAlert('flex', '비밀번호를 입력하세요', 'none')});
alertButton.addEventListener('click', function(){handleAlert('none', '', 'inline-block')});

