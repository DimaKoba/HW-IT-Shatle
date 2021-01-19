//===================================================Форма регистрации


let formSignIn = document.forms[0];
let emailInputSignIn = formSignIn.emailinput;
let div = document.createElement('div');
emailInputSignIn.addEventListener('blur', ()=>{
    if (!emailInputSignIn.value.includes('@')) {
        emailInputSignIn.style.borderColor = 'red';
        div.classList.add('error');
        div.innerHTML = 'Введите правильный e-mail'
        div.style.color = 'red';
        document.querySelector('.e__mail').append(div);
    }
});


let v = document.querySelector('.input__form');
let lastDiv = document.querySelector('.error');
// emailInputSignIn.addEventListener('focus', ()=>{
// 
// if(v.contains(lastDiv)) {
//    v.remove(lastDiv);
// }
// });
// 
// 












