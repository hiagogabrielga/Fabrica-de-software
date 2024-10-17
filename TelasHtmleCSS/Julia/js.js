document.querySelector('.toggle-password').addEventListener('click', function () {
    const passwordField = document.querySelector('#password');
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
});

const togglePassword = document.querySelector('#togglePassword');
const passwordField = document.querySelector('#senha');

togglePassword.addEventListener('click', function () {
    // Alterna o tipo do input entre 'password' e 'text'
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);

    // Alterna o ícone entre "eye" e "EYEB"
    if (type === 'text') {
        togglePassword.src = 'EYEB.png'; // Substitui pelo ícone "EYEB" quando a senha é mostrada
    } else {
        togglePassword.src = 'eye.png'; // Volta para o ícone "eye" quando a senha é escondida
    }
});
