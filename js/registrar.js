let email = document.getElementById('email');
let senha = document.getElementById('senha')

email.addEventListener ('focus',()=>{
    email.style.borderColor = '#01200F';
});

email.addEventListener ('blur', ()=>{
    email.style.borderColor = '#0000007b';
});

senha.addEventListener ('focus', ()=>{
    senha.style.borderColor = '#01200F';
});

senha.addEventListener ('blur', ()=>{
    senha.style.borderColor = '#0000007b';
});