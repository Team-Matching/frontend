import { loadProfile, loadCareer, loadCertification, loadEducation, loadSkill, loadInterest, addCareer, addCertification, addEducation, addSkill, addInterest } from './api.js';

document.addEventListener('DOMContentLoaded', function() {
    const mainBtn = document.getElementById('mainBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    const profileInfo = document.getElementById('profileInfo');

    mainBtn.addEventListener('click', function() {
        window.location.href = '../index.html';
    });

    logoutBtn.addEventListener('click', function() {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        alert('Logged out successfully!');
        window.location.href = '../index.html';
    });

    loadProfileData();
    loadCareerData();
    loadCertificationData();
    loadEducationData();
    loadSkillData();
    loadInterestData();

    document.getElementById('careerForm').addEventListener('submit', async function(event) {
        event.preventDefault();
        const description = document.getElementById('careerInput').value;
        const data = await addCareer({ description });
        if (data) {
            const careerTab = document.getElementById('careerDetails');
            careerTab.innerHTML += `<p>${data.description}</p>`;
            document.getElementById('careerInput').value = ''; // 폼 리셋
        }
    });

    document.getElementById('certificationForm').addEventListener('submit', async function(event) {
        event.preventDefault();
        const description = document.getElementById('certificationInput').value;
        const data = await addCertification({ description });
        if (data) {
            const certificationTab = document.getElementById('certificationDetails');
            certificationTab.innerHTML += `<p>${data.description}</p>`;
            document.getElementById('certificationInput').value = ''; // 폼 리셋
        }
    });

    document.getElementById('educationForm').addEventListener('submit', async function(event) {
        event.preventDefault();
        const description = document.getElementById('educationInput').value;
        const data = await addEducation({ description });
        if (data) {
            const educationTab = document.getElementById('educationDetails');
            educationTab.innerHTML += `<p>${data.description}</p>`;
            document.getElementById('educationInput').value = ''; // 폼 리셋
        }
    });

    document.getElementById('skillForm').addEventListener('submit', async function(event) {
        event.preventDefault();
        const description = document.getElementById('skillInput').value;
        const data = await addSkill({ description });
        if (data) {
            const skillTab = document.getElementById('skillDetails');
            skillTab.innerHTML += `<p>${data.description}</p>`;
            document.getElementById('skillInput').value = ''; // 폼 리셋
        }
    });

    document.getElementById('interestForm').addEventListener('submit', async function(event) {
        event.preventDefault();
        const description = document.getElementById('interestInput').value;
        const data = await addInterest({ description });
        if (data) {
            const interestTab = document.getElementById('interestDetails');
            interestTab.innerHTML += `<p>${data.description}</p>`;
            document.getElementById('interestInput').value = ''; // 폼 리셋
        }
    });
});

async function loadProfileData() {
    const data = await loadProfile();
    if (data) {
        profileInfo.innerHTML = `
            <p>Name: ${data.name}</p>
            <p>Email: ${data.email}</p>
            <p>Nickname: ${data.nickname}</p>
            <p>Birthdate: ${data.birthdate}</p>
            <p>Phone Number: ${data.phoneNumber}</p>
        `;
    }
}

async function loadCareerData() {
    const data = await loadCareer();
    if (data) {
        const careerTab = document.getElementById('careerDetails');
        careerTab.innerHTML = data.map(career => `<p>${career.description}</p>`).join('');
    }
}

async function loadCertificationData() {
    const data = await loadCertification();
    if (data) {
        const certificationTab = document.getElementById('certificationDetails');
        certificationTab.innerHTML = data.map(cert => `<p>${cert.description}</p>`).join('');
    }
}

async function loadEducationData() {
    const data = await loadEducation();
    if (data) {
        const educationTab = document.getElementById('educationDetails');
        educationTab.innerHTML = data.map(edu => `<p>${edu.description}</p>`).join('');
    }
}

async function loadSkillData() {
    const data = await loadSkill();
    if (data) {
        const skillTab = document.getElementById('skillDetails');
        skillTab.innerHTML = data.map(skill => `<p>${skill.description}</p>`).join('');
    }
}

async function loadInterestData() {
    const data = await loadInterest();
    if (data) {
        const interestTab = document.getElementById('interestDetails');
        interestTab.innerHTML = data.map(interest => `<p>${interest.description}</p>`).join('');
    }
}
