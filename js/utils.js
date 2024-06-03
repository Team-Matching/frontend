export function setupNavigation() {
    const signupBtn = document.getElementById('signupBtn');
    const loginBtn = document.getElementById('loginBtn');
    const profileBtn = document.getElementById('profileBtn');
    const teamBtn = document.getElementById('teamBtn');
    const personalBtn = document.getElementById('personalBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    const profileMenu = document.getElementById('profileMenu');
    const userGreeting = document.getElementById('userGreeting');

    // Local storage에 토큰이 있으면 로그인 상태로 간주
    const token = localStorage.getItem('token');
    if (token) {
        const email = localStorage.getItem('email');
        userGreeting.textContent = `안녕하세요, ${email}님`;
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

    if (teamBtn) {
        teamBtn.addEventListener('click', function() {
            window.location.href = 'pages/team.html';
        });
    }

    if (personalBtn) {
        personalBtn.addEventListener('click', function() {
            window.location.href = 'pages/personal.html';
        });
    }

    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            localStorage.removeItem('token');
            localStorage.removeItem('email');
            alert('Logged out successfully!');
            window.location.href = '../index.html';
        });
    }
}
