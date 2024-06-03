import { createPost } from './api.js';

document.addEventListener('DOMContentLoaded', function() {
    const postForm = document.getElementById('postForm');
    const postError = document.getElementById('postError');

    postForm.addEventListener('submit', async function(event) {
        event.preventDefault();
        const title = document.getElementById('title').value;
        const now = new Date();
        const creationDate = now.toISOString().slice(0, 19); // 현재 시간을 YYYY-MM-DDTHH:MM:SS 형식으로 변환
        const teamMemberCount = document.getElementById('teamMemberCount').value;
        const category = document.getElementById('category').value;
        const detail = document.getElementById('detail').value;
        const summary = document.getElementById('summary').value;

        const response = await createPost({ title, creationDate, teamMemberCount, category, detail, summary });
        if (response.success) {
            alert('Post created successfully!');
            window.location.href = 'team.html';
        } else {
            postError.textContent = response.message || 'Failed to create post';
        }
    });
});
