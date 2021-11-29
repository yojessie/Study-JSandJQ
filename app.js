const alert = document.querySelector('.alert');
const alertButton = document.querySelector('.alert button');
const button = document.querySelector('.make-alert');

function makeAlert() {
    alert.classList.remove('hidden');
    button.classList.add('hidden');
}

function closeAlert() {
    alert.classList.add('hidden');
    button.classList.remove('hidden');
}

button.addEventListener('click', makeAlert);
alertButton.addEventListener('click', closeAlert);