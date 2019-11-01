var lastName = document.getElementById('last-name');
var login = document.getElementById('login');
var password1 = document.getElementById('password1');
var password2 = document.getElementById('password2');
var age = document.getElementById('age');
var checkbox = document.getElementById('check');
var list = document.getElementById('list');
var button = document.getElementById('button');
var param1 = 0, param2 = 0, param3 = 0;

function validateComments() {
    if (password1.value != password2.value) {
        password2.setCustomValidity('Пароли не совпадают.');
    } else {
        password2.setCustomValidity('');
        param1 = 1;
    }

    if (age.value < 16) {
        age.setCustomValidity('Возраст должен быть не меньше 16 лет.');
    } else {
        age.setCustomValidity('');
        param2 = 1;
    }

    if (checkbox.checked) {
        checkbox.setCustomValidity('');
        param3 = 1;
    } else {
        checkbox.setCustomValidity('Вы должны согласиться с условиями.');
    }

    if ((param1 == 1) & (param2 == 1) & (param3 == 1)) {
        alert('Спасибо, форма заполнена!');
    }
}

function chooseNameButton() {
    if (list.value == 'send') {
        button.value = 'Отправить';
    } else if (list.value == 'enter') {
        button.value = 'Войти';
    } else if (list.value == 'registration') {
        button.value = 'Зарегистрироваться';
    }
}
	
function validateLastName() {
    var text = lastName.value;
    lastName.value = text.replace(/\s/g, '');
}
