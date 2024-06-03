import { fetchPostDetail, getPostApplications } from './api.js';

document.addEventListener('DOMContentLoaded', async function() {
    const postDetailContainer = document.getElementById('postDetailContainer');
    const applyBtn = document.getElementById('applyBtn');
    const applicationsBtn = document.getElementById('applicationsBtn');
    const applyError = document.getElementById('applyError');

    // 로그인 상태 확인
    const token = localStorage.getItem('token');
    const email = localStorage.getItem('email');
    if (!token) {
        alert('로그인이 필요합니다.');
        window.location.href = '../login.html'; // 로그인 페이지로 리디렉션
        return;
    }

    // URL에서 postId 추출
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('postId');

    if (!postId) {
        postDetailContainer.innerHTML = '<p>Invalid post ID.</p>';
        return;
    }

    // postId를 사용하여 게시물 상세 정보 로드
    const postDetail = await fetchPostDetail(postId);

    if (postDetail) {
        postDetailContainer.innerHTML = `
            <h2>${postDetail.title}</h2>
            <p><strong>Creation Date:</strong> ${postDetail.creationDate}</p>
            <p><strong>Team Member Count:</strong> ${postDetail.teamMemberCount}</p>
            <p><strong>Category:</strong> ${postDetail.category}</p>
            <p><strong>Detail:</strong> ${postDetail.detail}</p>
            <p><strong>Summary:</strong> ${postDetail.summary}</p>
        `;

        // 팀장인 경우 지원 목록 버튼 표시
        if (postDetail.authorEmail === email) {
            applicationsBtn.style.display = 'inline-block';
        }
    } else {
        postDetailContainer.innerHTML = '<p>No post details available.</p>';
    }

    applyBtn.addEventListener('click', function() {
        window.location.href = `apply.html?postId=${postId}`;
    });

    applicationsBtn.addEventListener('click', function() {
        window.location.href = `applications.html?postId=${postId}`;
    });
});
