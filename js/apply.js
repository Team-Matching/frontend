import { applyToPost } from './api.js';

document.addEventListener('DOMContentLoaded', function() {
    const applyForm = document.getElementById('applyForm');
    const applyError = document.getElementById('applyError');

    // URL에서 postId 추출
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('postId');

    if (!postId) {
        applyError.textContent = 'Invalid post ID.';
        return;
    }

    applyForm.addEventListener('submit', async function(event) {
        event.preventDefault();

        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;

        const response = await applyToPost(postId, { title, description });

        if (response.success) {
            alert('지원이 성공적으로 완료되었습니다.');
            window.location.href = 'post_detail.html?postId=' + postId;
        } else {
            applyError.textContent = response.message || '지원에 실패했습니다.';
        }
    });
});
