import { signUp } from './api.js';

document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signupForm');
    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const password = document.getElementById('password').value;
        const nickname = document.getElementById('nickname').value;
        const email = document.getElementById('email').value;
        const birthdate = document.getElementById('birthdate').value;
        const phoneNumber = document.getElementById('phoneNumber').value;
        signUp({ name, password, nickname, email, birthdate, phoneNumber });
    });
});
