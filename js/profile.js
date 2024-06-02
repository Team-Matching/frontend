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
        const company = document.getElementById('company').value;
        const role = document.getElementById('role').value;
        const startDate = document.getElementById('startDate').value;
        const endDate = document.getElementById('endDate').value;
        const description = document.getElementById('description').value;
    
        const data = await addCareer({ company, role, startDate, endDate, description });
        if (data) {
            const careerTab = document.getElementById('careerDetails');
            careerTab.innerHTML += `
                <div class="career-item">
                    <h4>${data.company}</h4>
                    <p><strong>Role:</strong> ${data.role}</p>
                    <p><strong>Period:</strong> ${data.startDate} - ${data.endDate}</p>
                    <p><strong>Description:</strong> ${data.description}</p>
                </div>
            `;
            document.getElementById('careerForm').reset(); // 폼 리셋
        }
    });
    
    document.getElementById('certificationForm').addEventListener('submit', async function(event) {
        event.preventDefault();
        const certificationName = document.getElementById('certificationName').value;
        const issuer = document.getElementById('issuer').value;
        const dateObtained = document.getElementById('dateObtained').value;
    
        const data = await addCertification({ certificationName, issuer, dateObtained });
        if (data) {
            const certificationTab = document.getElementById('certificationDetails');
            certificationTab.innerHTML += `
                <div class="certification-item">
                    <h4>${data.certificationName}</h4>
                    <p><strong>Issuer:</strong> ${data.issuer}</p>
                    <p><strong>Date Obtained:</strong> ${data.dateObtained}</p>
                </div>
            `;
            document.getElementById('certificationForm').reset(); // 폼 리셋
        }
    });
    
    document.getElementById('educationForm').addEventListener('submit', async function(event) {
        event.preventDefault();
        const institution = document.getElementById('institution').value;
        const degree = document.getElementById('degree').value;
        const major = document.getElementById('major').value;
        const startYear = document.getElementById('startYear').value;
        const endYear = document.getElementById('endYear').value;
    
        const data = await addEducation({ institution, degree, major, startYear, endYear });
        if (data) {
            const educationTab = document.getElementById('educationDetails');
            educationTab.innerHTML += `
                <div class="education-item">
                    <h4>${data.institution}</h4>
                    <p><strong>Degree:</strong> ${data.degree}</p>
                    <p><strong>Major:</strong> ${data.major}</p>
                    <p><strong>Period:</strong> ${data.startYear} - ${data.endYear}</p>
                </div>
            `;
            document.getElementById('educationForm').reset(); // 폼 리셋
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
        careerTab.innerHTML = data.map(career => `
            <div class="career-item">
                <h4>${career.company}</h4>
                <p><strong>Role:</strong> ${career.role}</p>
                <p><strong>Period:</strong> ${career.startDate} - ${career.endDate}</p>
                <p><strong>Description:</strong> ${career.description}</p>
            </div>
        `).join('');
    }
}

async function loadCertificationData() {
    const data = await loadCertification();
    if (data) {
        const certificationTab = document.getElementById('certificationDetails');
        certificationTab.innerHTML = data.map(cert => `
            <div class="certification-item">
                <h4>${cert.certificationName}</h4>
                <p><strong>Issuer:</strong> ${cert.issuer}</p>
                <p><strong>Date Obtained:</strong> ${cert.dateObtained}</p>
            </div>
        `).join('');
    }
}

async function loadEducationData() {
    const data = await loadEducation();
    if (data) {
        const educationTab = document.getElementById('educationDetails');
        educationTab.innerHTML = data.map(edu => `
            <div class="education-item">
                <h4>${edu.institution}</h4>
                <p><strong>Degree:</strong> ${edu.degree}</p>
                <p><strong>Major:</strong> ${edu.major}</p>
                <p><strong>Period:</strong> ${edu.startYear} - ${edu.endYear}</p>
            </div>
        `).join('');
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
