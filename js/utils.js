export function setupNavigation() {
    const signupBtn = document.getElementById('signupBtn');
    const loginBtn = document.getElementById('loginBtn');
    const profileBtn = document.getElementById('profileBtn');
    const profileMenu = document.getElementById('profileMenu');
    const userGreeting = document.getElementById('userGreeting');

    // Local storage에 토큰이 있으면 로그인 상태로 간주
    const token = localStorage.getItem('token');
    if (token) {
        const username = localStorage.getItem('username');
        userGreeting.textContent = `Hello, ${username}`;
        profileMenu.style.display = 'inline-block';
        signupBtn.style.display = 'none';
        loginBtn.style.display = 'none';
    } else {
        profileMenu.style.display = 'none';
    }

    if (signupBtn) {
        signupBtn.addEventListener('click', function() {
            window.location.href = 'pages/signup.html';
        });
    }

    if (loginBtn) {
        loginBtn.addEventListener('click', function() {
            window.location.href = 'pages/login.html';
        });
    }

    if (profileBtn) {
        profileBtn.addEventListener('click', function() {
            window.location.href = 'pages/profile.html';
        });
    }
}
