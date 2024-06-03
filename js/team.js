import { fetchPosts } from './api.js';

document.addEventListener('DOMContentLoaded', async function() {
    const mainBtn = document.getElementById('mainBtn');
    const profileBtn = document.getElementById('profileBtn');
    const mypageBtn = document.getElementById('mypageBtn');
    const personalBtn = document.getElementById('personalBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    const createPostBtn = document.getElementById('createPostBtn');
    const postsContainer = document.getElementById('postsContainer');

    mainBtn.addEventListener('click', function() {
        window.location.href = '../index.html';
    });

    profileBtn.addEventListener('click', function() {
        window.location.href = 'profile.html';
    });

    mypageBtn.addEventListener('click', function() {
        window.location.href = 'mypage.html';
    });

    personalBtn.addEventListener('click', function() {
        window.location.href = 'personal.html';
    });

    logoutBtn.addEventListener('click', function() {
        localStorage.removeItem('token');
        localStorage.removeItem('email');
        localStorage.removeItem('userId');
        alert('Logged out successfully!');
        window.location.href = '../index.html';
    });

    createPostBtn.addEventListener('click', function() {
        window.location.href = 'create_post.html';
    });

    // 게시물 불러오기
    const postsResponse = await fetchPosts();
    const posts = postsResponse.body; // postsResponse에서 body를 추출하여 사용
    console.log('Posts loaded:', posts); // 불러온 게시물 데이터를 콘솔에 출력하여 확인
    if (posts && posts.length > 0) {
        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.className = 'post-card';
            postElement.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.summary}</p>
            `;
            postElement.addEventListener('click', function() {
                window.location.href = `post_detail.html?postId=${post.postId}`;
            });
            postsContainer.appendChild(postElement);
        });
    } else {
        postsContainer.innerHTML = '<p>No posts available.</p>';
    }
});
