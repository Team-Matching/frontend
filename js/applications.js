import { getPostApplications } from './api.js';

document.addEventListener('DOMContentLoaded', async function() {
    const applicationsContainer = document.getElementById('applicationsContainer');
    const error = document.getElementById('error');

    // URL에서 postId 추출
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('postId');

    if (!postId) {
        error.textContent = 'Invalid post ID.';
        return;
    }

    // postId를 사용하여 지원자 목록 로드
    const applications = await getPostApplications(postId);

    if (applications && applications.length > 0) {
        const list = document.createElement('ul');
        applications.forEach(application => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <span>${application.applicantEmail}</span>
                <button class="view-profile-btn" data-applicantid="${application.applicantId}">프로필 보기</button>
                <button class="view-application-btn" data-title="${application.title}" data-description="${application.description}">지원서 보기</button>
            `;
            list.appendChild(listItem);
        });
        applicationsContainer.appendChild(list);

        document.querySelectorAll('.view-profile-btn').forEach(button => {
            button.addEventListener('click', function() {
                const applicantId = this.dataset.applicantid;
                window.location.href = `profile_view.html?applicantId=${applicantId}`;
            });
        });

        document.querySelectorAll('.view-application-btn').forEach(button => {
            button.addEventListener('click', function() {
                const title = this.dataset.title;
                const description = this.dataset.description;
                window.location.href = `application_view.html?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`;
            });
        });
    } else {
        applicationsContainer.innerHTML = '<p>No applications available.</p>';
    }
});
