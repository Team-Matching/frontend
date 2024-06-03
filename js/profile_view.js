import { fetchUserProfileById } from './api.js';

document.addEventListener('DOMContentLoaded', async function() {
    const profileContainer = document.getElementById('profileContainer');
    const error = document.getElementById('error');

    // URL에서 applicantId 추출
    const urlParams = new URLSearchParams(window.location.search);
    const applicantId = urlParams.get('applicantId');

    if (!applicantId) {
        error.textContent = 'Invalid applicant ID.';
        return;
    }

    // applicantId를 사용하여 프로필 정보 로드
    const profile = await fetchUserProfileById(applicantId);

    if (profile) {
        profileContainer.innerHTML = `
            <p><strong>Email:</strong> ${profile.memberEmail}</p>
            <h3>Careers</h3>
            <ul>
                ${profile.careers.map(career => `
                    <li>
                        <p><strong>Company:</strong> ${career.company}</p>
                        <p><strong>Role:</strong> ${career.role}</p>
                        <p><strong>Start Date:</strong> ${career.startDate}</p>
                        <p><strong>End Date:</strong> ${career.endDate}</p>
                        <p><strong>Description:</strong> ${career.description}</p>
                    </li>
                `).join('')}
            </ul>
            <h3>Certifications</h3>
            <ul>
                ${profile.certifications.map(certification => `
                    <li>
                        <p><strong>Name:</strong> ${certification.certificationName}</p>
                        <p><strong>Issuer:</strong> ${certification.issuer}</p>
                        <p><strong>Date Obtained:</strong> ${certification.dateObtained}</p>
                    </li>
                `).join('')}
            </ul>
            <h3>Educations</h3>
            <ul>
                ${profile.educations.map(education => `
                    <li>
                        <p><strong>Institution:</strong> ${education.institution}</p>
                        <p><strong>Degree:</strong> ${education.degree}</p>
                        <p><strong>Major:</strong> ${education.major}</p>
                        <p><strong>Start Year:</strong> ${education.startYear}</p>
                        <p><strong>End Year:</strong> ${education.endYear}</p>
                    </li>
                `).join('')}
            </ul>
            <h3>Interests</h3>
            <ul>
                ${profile.interests.map(interest => `
                    <li>${interest.interest}</li>
                `).join('')}
            </ul>
            <h3>Skills</h3>
            <ul>
                ${profile.skills.map(skill => `
                    <li>${skill.skill}</li>
                `).join('')}
            </ul>
        `;
    } else {
        profileContainer.innerHTML = '<p>Failed to load profile.</p>';
    }
});
