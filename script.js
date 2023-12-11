var joinin = document.querySelector('.div-21');
var signin = document.querySelector('.div-19');
var joinpara = document.querySelector('.div-p');
var password = document.querySelector('.div-38');
var passwordre = document.querySelector('.div-34');
var passwordimg = document.querySelector('.img-14');

function updateStyles(activeElement, inactiveElement, display, textContent = '') {
    activeElement.style.color = '#8064a2';
    inactiveElement.style.color = '#939ca3';
    activeElement.style.borderBottom = '2px solid #8064a2';
    inactiveElement.style.borderBottom = '0px solid #8064a2';
    passwordre.style.opacity = '0';
    joinpara.style.display = display;
    password.textContent = textContent;
    passwordimg.style.display = activeElement === joinin ? 'none' : 'block';
}

joinin.addEventListener('click', function () {
    updateStyles(joinin, signin, 'block', 'Password Strength');
});

signin.addEventListener('click', function () {
    updateStyles(signin, joinin, 'none', 'Forgot password?');
    passwordre.style.opacity = '1'; 
});

document.querySelector('.img-9s').addEventListener('click', function () {
    alert("Thanks For This Opportunity");
});
